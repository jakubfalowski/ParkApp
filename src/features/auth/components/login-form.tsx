import { useForm, type SubmitHandler, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputControl } from "@components/input/input-control";
import { SubmitButton } from "./submit-button";
import { loginSchema, type LoginFormValues } from "../schemas/login-schema";

type Props = {
  onSubmit: SubmitHandler<LoginFormValues>;
  loading?: boolean;
};

export function LoginForm({ onSubmit, loading }: Props) {
  const resolver = zodResolver(loginSchema) as Resolver<LoginFormValues>;

  const methods = useForm<LoginFormValues>({
    resolver,
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  });

  return (
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
      <SubmitButton loading={loading}>
        {loading ? "Logowanie..." : "Zaloguj"}
      </SubmitButton>
    </form>
  );
}
