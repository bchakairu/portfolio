'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

// Ambient gradient blob for the hero. Grows and fades as the page scrolls
// past it, on top of its own slow ambient drift.
export default function Blob() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.6]);
  const opacity = useTransform(scrollY, [0, 500], [0.4, 0]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ scale, opacity }}
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/3 animate-drift rounded-full blur-[110px]"
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #D98A8E, #8C3A46 40%, #5C7A52 75%, transparent 100%)',
        }}
      />
    </motion.div>
  );
}
