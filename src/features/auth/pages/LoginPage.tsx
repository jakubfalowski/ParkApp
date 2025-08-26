import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/login-schema";
import type { LoginFormValues } from "../schemas/login-schema";
import { InputControl } from "@components/input/input-control";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../api/useLogin";

export default function LoginPage() {
  const navigate = useNavigate();
  const { submit, loading, error } = useLogin();
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
      navigate("/");
    }
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
      <InputControl
        control={methods.control}
        name="email"
        label="Email"
        textFieldProps={{ inputProps: { "data-cy": "email" } }}
      />
      <InputControl
        control={methods.control}
        name="password"
        label="Hasło"
        variant="password"
        type="password"
        textFieldProps={{ inputProps: { "data-cy": "password" } }}
      />
      <button type="submit" disabled={loading} data-cy="submit">
        {loading ? "Logowanie..." : "Zaloguj"}
      </button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
}
