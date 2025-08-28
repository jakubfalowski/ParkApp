export function LoginErrorAlert({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm"
      data-cy="error"
    >
      {message}
    </div>
  );
}
