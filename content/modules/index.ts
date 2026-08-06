import type { Module } from '@/lib/types';

import module01 from './01-foundations';
import module02 from './02-get-found';
import module03 from './03-email';
import module04 from './04-design';

/** Course order. Slugs stay in English in both locales so URLs survive a language switch. */
export const MODULES: Module[] = [module01, module02, module03, module04];
