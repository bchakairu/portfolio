'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Circular portrait frame. Looks for /public/photo.jpg — until that file
// exists it falls back to a gradient monogram so the layout never breaks.
export default function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-56 w-56 shrink-0 sm:h-64 sm:w-64"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-berry-light via-berry to-berry-deep opacity-60 blur-xl" />
      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-berry/40 bg-panel">
        {!failed ? (
          <img
            src="/photo.jpg"
            alt="Bill Chakairu"
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-5xl text-berry-light">
            BC
          </div>
        )}
      </div>
    </motion.div>
  );
}
