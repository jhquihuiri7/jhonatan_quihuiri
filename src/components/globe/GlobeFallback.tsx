// Flat CSS globe shown while the 3D globe loads, or instead of it when WebGL is unavailable.
// Sized to match the Earth in the 3D scene (79% of the box).
export default function GlobeFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="globe relative aspect-square w-[79%] overflow-hidden rounded-full">
        <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-white/[0.16]" />
        <span aria-hidden="true" className="absolute inset-x-[-10%] top-[26%] h-[48%] rounded-full border border-white/[0.14]" />
        <span aria-hidden="true" className="absolute inset-x-[10%] top-[12%] h-[76%] rounded-full border border-white/10" />
        <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px bg-white/[0.16]" />
        <span aria-hidden="true" className="absolute inset-y-[-10%] left-[28%] w-[44%] rounded-full border border-white/[0.14]" />
        <span aria-hidden="true" className="absolute inset-y-0 left-[12%] w-[76%] rounded-full border border-white/10" />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-pink shadow-[0_0_0_6px_rgba(237,7,98,0.25),0_0_18px_rgba(237,7,98,0.8)]"
        />
      </div>
    </div>
  );
}
