'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * Everything the visitor does — checkmarks, quiz answers, written reflections,
 * theme — lives in localStorage. No backend, and nothing leaves the browser.
 *
 * One tiny store rather than a context tree: components subscribe to the key
 * they care about via useSyncExternalStore, so a checkmark in the sidebar and
 * the header progress bar stay in sync without prop-drilling.
 */

const PREFIX = 'dme:v1:';

type Listener = () => void;
const listeners = new Set<Listener>();

/* Bumped on every write. Components that need to read many keys at once
   subscribe to this single number and then read values synchronously, which
   keeps the hook count fixed regardless of how many keys they look at. */
let version = 0;

/* Server render and first client render must agree, so reads return the
   fallback until the store has hydrated from localStorage. */
let hydrated = false;
let cache: Record<string, unknown> = {};

function emit() {
  version += 1;
  for (const l of listeners) l();
}

export function hydrateStore() {
  if (hydrated || typeof window === 'undefined') return;
  const next: Record<string, unknown> = {};
  for (let i = 0; i < window.localStorage.length; i += 1) {
    const key = window.localStorage.key(i);
    if (!key || !key.startsWith(PREFIX)) continue;
    const raw = window.localStorage.getItem(key);
    if (raw === null) continue;
    try {
      next[key.slice(PREFIX.length)] = JSON.parse(raw);
    } catch {
      /* A hand-edited or truncated value shouldn't take the page down. */
    }
  }
  cache = next;
  hydrated = true;
  emit();
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/* Another tab changing progress should update this one too. */
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (!event.key || !event.key.startsWith(PREFIX)) return;
    const short = event.key.slice(PREFIX.length);
    if (event.newValue === null) {
      delete cache[short];
    } else {
      try {
        cache[short] = JSON.parse(event.newValue);
      } catch {
        return;
      }
    }
    emit();
  });
}

export function readValue<T>(key: string, fallback: T): T {
  if (!hydrated) return fallback;
  return (cache[key] as T) ?? fallback;
}

export function writeValue<T>(key: string, value: T) {
  cache[key] = value;
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch {
      /* Private mode or a full quota — keep the in-memory value and carry on. */
    }
  }
  emit();
}

export function clearAll() {
  if (typeof window !== 'undefined') {
    const doomed: string[] = [];
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = window.localStorage.key(i);
      if (key && key.startsWith(PREFIX)) doomed.push(key);
    }
    for (const key of doomed) window.localStorage.removeItem(key);
  }
  cache = {};
  emit();
}

export function useStoredValue<T>(key: string, fallback: T) {
  const value = useSyncExternalStore(
    subscribe,
    () => readValue<T>(key, fallback),
    () => fallback,
  );
  const set = useCallback((next: T) => writeValue(key, next), [key]);
  return [value, set] as const;
}

/** True once localStorage has been read, so UI can avoid a hydration flash. */
export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => hydrated,
    () => false,
  );
}

/**
 * Subscribe once, then read as many keys as you like with `readValue`.
 * Returns the store version so React re-renders when anything changes.
 */
export function useStoreVersion() {
  return useSyncExternalStore(
    subscribe,
    () => version,
    () => -1,
  );
}

/* --- Progress ------------------------------------------------------------ */

export const DONE_MODULES = 'done-modules';
export const DONE_LESSONS = 'done-lessons';

export function useDoneModules() {
  return useStoredValue<string[]>(DONE_MODULES, []);
}

export function useDoneLessons() {
  return useStoredValue<string[]>(DONE_LESSONS, []);
}

export function toggleInList(list: string[], id: string, on: boolean): string[] {
  const set = new Set(list);
  if (on) set.add(id);
  else set.delete(id);
  return [...set];
}

/* --- Quiz answers -------------------------------------------------------- */

export function answerKey(itemId: string) {
  return `answer:${itemId}`;
}
