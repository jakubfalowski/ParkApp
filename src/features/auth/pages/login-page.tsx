import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";

import { InputControl } from "@components/input/input-control";
import { LoadingButton } from "@components/loading-button/loading-button";
import { useAuth } from "@features/auth/context/use-auth";

import { loginSchema } from "../schemas/login-schema";
import type { LoginFormValues } from "../schemas/login-schema";
import { useLogin } from "../api/useLogin";

export default function LoginPage() {
  const navigate = useNavigate();
  const { submit, loading, error } = useLogin();
  const { login } = useAuth();

  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async ({
    email,
    password,
  }) => {
    const res = await submit({ email, password });
    if (res?.token) {
      login(res.token);
      navigate("/");
    }
  };

  return (
    <section
      className="min-h-dvh flex items-center justify-center px-4"
      data-cy="login-screen"
    >
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg shadow-light-yellow rounded-2xl p-6 md:p-8">
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

          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm"
              data-cy="error"
            >
              {error}
            </div>
          )}

          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            noValidate
            className="space-y-4 flex flex-col gap-2"
          >
            <InputControl
              control={methods.control}
              name="email"
              label="Email"
              textFieldProps={{
                fullWidth: true,
                placeholder: "twoj@email.com",
                inputProps: { "data-cy": "email" },
              }}
            />

            <InputControl
              control={methods.control}
              name="password"
              label="Hasło"
              type="password"
              textFieldProps={{
                fullWidth: true,
                placeholder: "••••••••",
                inputProps: { "data-cy": "password" },
              }}
            />

            <button
              type="submit"
              disabled={loading}
              data-cy="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-dark-blue px-4 py-2.5 text-white text-sm font-medium shadow-sm transition
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? <LoadingButton text="Logowanie..." /> : "Zaloguj"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-slate-500">
            Zadanie rekrutacyjne
          </p>
        </div>
        <div className="mt-6 text-center text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Jakub Fałowski</span>
        </div>
      </div>
    </section>
  );
}
