import { useNavigate } from "react-router-dom";
import { useAuth } from "@features/auth/context/use-auth";
import { useLogin } from "../api/useLogin";

import { LoginCard } from "../components/login-card";
import { LoginHeader } from "../components/login-header";
import { LoginErrorAlert } from "../components/login-error-alert";
import { LoginForm } from "../components/login-form";

export default function LoginPage() {
  const navigate = useNavigate();
  const { submit, loading, error } = useLogin();
  const { login } = useAuth();

  return (
    <section
      className="min-h-dvh flex items-center justify-center px-4"
      data-cy="login-screen"
    >
      <div className="w-full max-w-md">
        <LoginCard>
          <LoginHeader />
          <LoginErrorAlert message={error ?? ""} />
          <LoginForm
            loading={loading}
            onSubmit={async ({ email, password }) => {
              const res = await submit({ email, password });
              if (res?.token) {
                login(res.token);
                navigate("/");
              }
            }}
          />
          <p className="mt-4 text-center text-xs text-slate-500">
            Zadanie rekrutacyjne
          </p>
        </LoginCard>
        <div className="mt-6 text-center text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Jakub Fałowski</span>
        </div>
      </div>
    </section>
  );
}
