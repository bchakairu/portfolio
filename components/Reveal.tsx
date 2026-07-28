'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// Wraps a section so it fades and rises into place the first time it
// scrolls into view. `once: true` keeps it from re-triggering, so
// scrolling back up doesn't replay it endlessly.
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
