export function LoginHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      <div className="h-12 w-12 rounded-full bg-dark-blue text-white grid place-items-center mb-3">
        <span className="text-sm font-semibold">PA</span>
      </div>
      <h1
        className="text-xl md:text-2xl font-semibold tracking-tight text-dark-blue"
        data-cy="login-title"
      >
        Zaloguj się
      </h1>
      <p className="text-sm text-slate-500 mt-1">
        Uzyskaj dostęp do widoku pilota
      </p>
    </div>
  );
}
