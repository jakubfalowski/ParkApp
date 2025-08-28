import { ReactNode } from "react";

export function SubmitButton({
  loading,
  children,
}: {
  loading?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      data-cy="submit"
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-dark-blue px-4 py-2.5 text-white text-sm font-medium shadow-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
