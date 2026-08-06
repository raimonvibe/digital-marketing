import type { Module } from '@/lib/types';

import module01 from './01-foundations';
import module02 from './02-get-found';
import module03 from './03-email';
import module04 from './04-design';
import module05 from './05-social';
import module06 from './06-store';
import module07 from './07-analytics';
import module08 from './08-loyalty';
import module09 from './09-copywriting';
import module10 from './10-content';
import module11 from './11-influencer';

/** Course order. Slugs stay in English in both locales so URLs survive a language switch. */
export const MODULES: Module[] = [
  module01,
  module02,
  module03,
  module04,
  module05,
  module06,
  module07,
  module08,
  module09,
  module10,
  module11,
];
