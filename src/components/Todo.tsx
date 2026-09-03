export function Todo({ children }: { children: string }) {
  return (
    <span className="rounded bg-amber-100 px-1.5 py-0.5 font-medium text-amber-900">
      {children}
    </span>
  );
}
