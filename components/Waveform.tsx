// The site's signature element: a line of bars that reads as an audio
// waveform, tracing the same shape a tone-contour mark takes over a
// syllable — the two things this site is about, in one line.
const HEIGHTS = [
  8, 14, 22, 12, 30, 18, 40, 24, 14, 34, 20, 46, 28, 16, 38, 22, 12, 30, 18, 8,
  16, 26, 12, 36, 20, 44, 24, 14, 32, 18, 10, 28, 16, 38, 22, 12,
];

export default function Waveform({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-moss/70"
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}
