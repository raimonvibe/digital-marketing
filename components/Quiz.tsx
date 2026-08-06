'use client';

import { useMemo } from 'react';
import { UI } from '@/content/ui';
import type { Locale, QuizItem } from '@/lib/types';
import { answerKey, readValue, useStoredValue, useStoreVersion } from '@/lib/store';
import Icon from './Icon';
import styles from './Quiz.module.css';

/* --- Stored answer shapes ------------------------------------------------ */

interface ChoiceState {
  picked: number | null;
  checked: boolean;
}
interface MultiState {
  picked: number[];
  checked: boolean;
}
interface MatchState {
  picked: (number | null)[];
  checked: boolean;
}
interface OrderState {
  picked: number[];
  checked: boolean;
}
interface ReflectState {
  text: string;
}

/* A tiny seeded shuffle keeps the ordering exercise stable between renders and
   between visits — otherwise the steps would jump around on every keystroke. */
function seededShuffle(length: number, seed: string): number[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return Math.abs(h) / 2147483647;
  };
  const out = Array.from({ length }, (_, i) => i);
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1)) % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  /* If the shuffle happened to be the identity, nudge it so there is work to do. */
  if (out.every((v, i) => v === i) && out.length > 1) {
    [out[0], out[1]] = [out[1], out[0]];
  }
  return out;
}

function eqSet(a: number[], b: number[]) {
  return a.length === b.length && [...a].sort().every((v, i) => v === [...b].sort()[i]);
}

/* --- Verdict banner ------------------------------------------------------ */

function Verdict({
  correct,
  explain,
  locale,
}: {
  correct: boolean;
  explain: string;
  locale: Locale;
}) {
  return (
    <div className={styles.verdict} data-correct={correct || undefined} role="status">
      <p className={styles.verdictHead}>
        <Icon name={correct ? 'check' : 'cross'} size={12} />{' '}
        {correct ? UI.quizCorrect[locale] : UI.quizIncorrect[locale]}
      </p>
      <p className={styles.verdictBody}>{explain}</p>
    </div>
  );
}

/* --- One question -------------------------------------------------------- */

export function QuizQuestion({
  item,
  locale,
  index,
}: {
  item: QuizItem;
  locale: Locale;
  index?: number;
}) {
  const label = index === undefined ? null : String(index).padStart(2, '0');

  return (
    <div className={styles.q}>
      <div className={styles.qHead}>
        {label && <span className={styles.qNum}>{label}</span>}
        <p className={styles.prompt}>{item.prompt}</p>
      </div>
      <QuizBody item={item} locale={locale} />
    </div>
  );
}

function QuizBody({ item, locale }: { item: QuizItem; locale: Locale }) {
  switch (item.kind) {
    case 'choice':
      return <ChoiceQ item={item} locale={locale} />;
    case 'multi':
      return <MultiQ item={item} locale={locale} />;
    case 'match':
      return <MatchQ item={item} locale={locale} />;
    case 'order':
      return <OrderQ item={item} locale={locale} />;
    case 'reflect':
      return <ReflectQ item={item} locale={locale} />;
  }
}

function ChoiceQ({
  item,
  locale,
}: {
  item: Extract<QuizItem, { kind: 'choice' }>;
  locale: Locale;
}) {
  const [state, setState] = useStoredValue<ChoiceState>(answerKey(item.id), {
    picked: null,
    checked: false,
  });
  const correct = state.picked === item.answer;

  return (
    <>
      <ul className={styles.options} role="radiogroup" aria-label={item.prompt}>
        {item.options.map((opt, i) => (
          <li key={i}>
            <label
              className={styles.option}
              data-picked={state.picked === i || undefined}
              data-right={state.checked && i === item.answer ? '' : undefined}
              data-wrong={
                state.checked && state.picked === i && i !== item.answer ? '' : undefined
              }
            >
              <input
                type="radio"
                name={item.id}
                checked={state.picked === i}
                onChange={() => setState({ picked: i, checked: false })}
              />
              <span>{opt}</span>
            </label>
          </li>
        ))}
      </ul>
      <Actions
        canCheck={state.picked !== null}
        checked={state.checked}
        onCheck={() => setState({ ...state, checked: true })}
        onRetry={() => setState({ picked: null, checked: false })}
        locale={locale}
      />
      {state.checked && (
        <Verdict correct={correct} explain={item.explain} locale={locale} />
      )}
    </>
  );
}

function MultiQ({
  item,
  locale,
}: {
  item: Extract<QuizItem, { kind: 'multi' }>;
  locale: Locale;
}) {
  const [state, setState] = useStoredValue<MultiState>(answerKey(item.id), {
    picked: [],
    checked: false,
  });
  const correct = eqSet(state.picked, item.answers);

  function toggle(i: number) {
    const next = state.picked.includes(i)
      ? state.picked.filter((v) => v !== i)
      : [...state.picked, i];
    setState({ picked: next, checked: false });
  }

  return (
    <>
      <p className={styles.hint}>{UI.quizSelectAll[locale]}</p>
      <ul className={styles.options}>
        {item.options.map((opt, i) => (
          <li key={i}>
            <label
              className={styles.option}
              data-picked={state.picked.includes(i) || undefined}
              data-right={state.checked && item.answers.includes(i) ? '' : undefined}
              data-wrong={
                state.checked && state.picked.includes(i) && !item.answers.includes(i)
                  ? ''
                  : undefined
              }
            >
              <input
                type="checkbox"
                checked={state.picked.includes(i)}
                onChange={() => toggle(i)}
              />
              <span>{opt}</span>
            </label>
          </li>
        ))}
      </ul>
      <Actions
        canCheck={state.picked.length > 0}
        checked={state.checked}
        onCheck={() => setState({ ...state, checked: true })}
        onRetry={() => setState({ picked: [], checked: false })}
        locale={locale}
      />
      {state.checked && (
        <Verdict correct={correct} explain={item.explain} locale={locale} />
      )}
    </>
  );
}

function MatchQ({
  item,
  locale,
}: {
  item: Extract<QuizItem, { kind: 'match' }>;
  locale: Locale;
}) {
  const [state, setState] = useStoredValue<MatchState>(answerKey(item.id), {
    picked: item.lefts.map(() => null),
    checked: false,
  });
  const picked = state.picked.length === item.lefts.length
    ? state.picked
    : item.lefts.map(() => null);
  const complete = picked.every((v) => v !== null);
  const correct = picked.every((v, i) => v === item.answer[i]);

  return (
    <>
      <p className={styles.hint}>{UI.quizMatchHint[locale]}</p>
      <ul className={styles.matchList}>
        {item.lefts.map((left, i) => (
          <li key={i} className={styles.matchRow}>
            <span className={styles.matchLeft}>{left}</span>
            <select
              className={styles.select}
              value={picked[i] ?? ''}
              data-right={state.checked && picked[i] === item.answer[i] ? '' : undefined}
              data-wrong={state.checked && picked[i] !== item.answer[i] ? '' : undefined}
              onChange={(e) => {
                const next = [...picked];
                next[i] = e.target.value === '' ? null : Number(e.target.value);
                setState({ picked: next, checked: false });
              }}
              aria-label={left}
            >
              <option value="">{UI.quizChoosePlaceholder[locale]}</option>
              {item.rights.map((right, j) => (
                <option key={j} value={j}>
                  {right}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      <Actions
        canCheck={complete}
        checked={state.checked}
        onCheck={() => setState({ ...state, checked: true })}
        onRetry={() => setState({ picked: item.lefts.map(() => null), checked: false })}
        locale={locale}
      />
      {state.checked && (
        <Verdict correct={correct} explain={item.explain} locale={locale} />
      )}
    </>
  );
}

function OrderQ({
  item,
  locale,
}: {
  item: Extract<QuizItem, { kind: 'order' }>;
  locale: Locale;
}) {
  const initial = useMemo(
    () => seededShuffle(item.steps.length, item.id),
    [item.id, item.steps.length],
  );
  const [state, setState] = useStoredValue<OrderState>(answerKey(item.id), {
    picked: initial,
    checked: false,
  });
  const order = state.picked.length === item.steps.length ? state.picked : initial;
  const correct = order.every((v, i) => v === i);

  function move(from: number, to: number) {
    if (to < 0 || to >= order.length) return;
    const next = [...order];
    [next[from], next[to]] = [next[to], next[from]];
    setState({ picked: next, checked: false });
  }

  return (
    <>
      <p className={styles.hint}>{UI.quizOrderHint[locale]}</p>
      <ol className={styles.orderList}>
        {order.map((stepIndex, position) => (
          <li
            key={stepIndex}
            className={styles.orderRow}
            data-right={state.checked && stepIndex === position ? '' : undefined}
            data-wrong={state.checked && stepIndex !== position ? '' : undefined}
          >
            <span className={styles.orderNum}>{position + 1}</span>
            <span className={styles.orderText}>{item.steps[stepIndex]}</span>
            <span className={styles.orderBtns}>
              <button
                type="button"
                className={styles.iconBtn}
                onClick={() => move(position, position - 1)}
                disabled={position === 0}
                aria-label={`${UI.quizMoveUp[locale]}: ${item.steps[stepIndex]}`}
              >
                <Icon name="caret-up" size={11} />
              </button>
              <button
                type="button"
                className={styles.iconBtn}
                onClick={() => move(position, position + 1)}
                disabled={position === order.length - 1}
                aria-label={`${UI.quizMoveDown[locale]}: ${item.steps[stepIndex]}`}
              >
                <Icon name="caret-down" size={11} />
              </button>
            </span>
          </li>
        ))}
      </ol>
      <Actions
        canCheck
        checked={state.checked}
        onCheck={() => setState({ ...state, checked: true })}
        onRetry={() => setState({ picked: initial, checked: false })}
        locale={locale}
      />
      {state.checked && (
        <Verdict correct={correct} explain={item.explain} locale={locale} />
      )}
    </>
  );
}

function ReflectQ({
  item,
  locale,
}: {
  item: Extract<QuizItem, { kind: 'reflect' }>;
  locale: Locale;
}) {
  const [state, setState] = useStoredValue<ReflectState>(answerKey(item.id), {
    text: '',
  });

  return (
    <>
      {item.hint && <p className={styles.hint}>{item.hint}</p>}
      <textarea
        className={styles.textarea}
        rows={4}
        value={state.text}
        placeholder={UI.quizReflectPlaceholder[locale]}
        onChange={(e) => setState({ text: e.target.value })}
        aria-label={item.prompt}
      />
      {state.text.trim().length > 0 && (
        <p className={styles.saved}>
          <Icon name="check" size={11} /> {UI.quizSaved[locale]}
        </p>
      )}
    </>
  );
}

function Actions({
  canCheck,
  checked,
  onCheck,
  onRetry,
  locale,
}: {
  canCheck: boolean;
  checked: boolean;
  onCheck: () => void;
  onRetry: () => void;
  locale: Locale;
}) {
  return (
    <div className={styles.actions}>
      {checked ? (
        <button type="button" className="btn btn-quiet" onClick={onRetry}>
          {UI.quizTryAgain[locale]}
        </button>
      ) : (
        <button type="button" className="btn" onClick={onCheck} disabled={!canCheck}>
          {UI.quizCheck[locale]}
        </button>
      )}
    </div>
  );
}

/* --- Whole-module quiz --------------------------------------------------- */

export default function Quiz({
  items,
  locale,
}: {
  items: QuizItem[];
  locale: Locale;
}) {
  return (
    <div className={styles.quiz}>
      {items.map((item, i) => (
        <QuizQuestion key={item.id} item={item} locale={locale} index={i + 1} />
      ))}
      <QuizScore items={items} locale={locale} />
    </div>
  );
}

/**
 * Score line plus the bit of encouragement the outline asks for. One
 * subscription to the store version, then a synchronous read per question —
 * so the hook count stays fixed however many questions a module has.
 */
function QuizScore({ items, locale }: { items: QuizItem[]; locale: Locale }) {
  useStoreVersion();

  const graded = items.filter((i) => i.kind !== 'reflect');
  const scores = graded.map(scoreItem);
  const answered = scores.filter((s) => s !== null).length;
  const right = scores.filter((s) => s === true).length;
  const total = graded.length;

  if (total === 0) return null;

  if (answered < total) {
    return (
      <p className={styles.scoreIdle}>
        {UI.quizScore[locale]}: {right} / {total}
      </p>
    );
  }

  const ratio = right / total;
  const cheer =
    ratio === 1
      ? UI.cheerAll[locale]
      : ratio >= 0.6
        ? UI.cheerMost[locale]
        : UI.cheerSome[locale];

  return (
    <div className={styles.score} data-perfect={ratio === 1 || undefined} role="status">
      <p className={styles.scoreNum}>
        {UI.quizScore[locale]}: {right} / {total}
      </p>
      <p className={styles.cheer}>{cheer}</p>
    </div>
  );
}

/** null = not checked yet. */
function scoreItem(item: QuizItem): boolean | null {
  const state = readValue<Record<string, unknown> | null>(answerKey(item.id), null);
  if (!state || state.checked !== true) return null;

  switch (item.kind) {
    case 'choice':
      return state.picked === item.answer;
    case 'multi':
      return eqSet((state.picked as number[]) ?? [], item.answers);
    case 'match':
      return ((state.picked as (number | null)[]) ?? []).every(
        (v, i) => v === item.answer[i],
      );
    case 'order':
      return ((state.picked as number[]) ?? []).every((v, i) => v === i);
    default:
      return null;
  }
}
