import { LogoMark } from "@/components/Logo";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-5">
        <LogoMark tone="dark" className="h-12 w-auto animate-pulse" />
        <span className="text-xs font-semibold tracking-[0.3em] text-body">LOADING</span>
      </div>
    </div>
  );
}
