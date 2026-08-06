import { MODULES } from '@/content/modules';
import type { Locale, Module, ToolId } from './types';

export { MODULES };

export function getModule(slug: string): Module | undefined {
  return MODULES.find((m) => m.slug === slug);
}

export function moduleNeighbours(slug: string) {
  const i = MODULES.findIndex((m) => m.slug === slug);
  return {
    prev: i > 0 ? MODULES[i - 1] : undefined,
    next: i >= 0 && i < MODULES.length - 1 ? MODULES[i + 1] : undefined,
  };
}

/** Tool lessons carry a stable id used for the sidebar checkmarks. */
export function lessonIds(m: Module, locale: Locale = 'en'): string[] {
  return m.content[locale].lessons.map((l) => `${m.slug}/${l.id}`);
}

export function allLessonIds(): string[] {
  return MODULES.flatMap((m) => lessonIds(m));
}

/** Which modules teach a given tool — powers the "taught in" column. */
export function modulesForTool(tool: ToolId): Module[] {
  return MODULES.filter((m) =>
    m.content.en.lessons.some((l) => l.tool === tool),
  );
}

export const TOTAL_MINUTES = MODULES.reduce((sum, m) => sum + m.minutes, 0);

/**
 * Course progress counts every checkable unit — the tool lessons plus one for
 * finishing each module — so the bar moves during a module, not only at its end.
 */
export function courseProgress(doneModules: string[], doneLessons: string[]) {
  const total = MODULES.length + allLessonIds().length;
  const done =
    doneModules.filter((s) => MODULES.some((m) => m.slug === s)).length +
    doneLessons.length;
  return { done, total, pct: total === 0 ? 0 : Math.round((done / total) * 100) };
}
