'use client';

import { useEffect } from 'react';
import { hydrateStore } from '@/lib/store';

/**
 * Reads localStorage once on mount. Kept out of the render path so the server
 * HTML and the first client render match; stored values appear on the pass
 * straight after.
 */
export default function StoreBoot() {
  useEffect(() => {
    hydrateStore();
  }, []);
  return null;
}
