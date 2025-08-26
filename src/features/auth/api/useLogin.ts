import { useState, useCallback } from "react";
import { login, type LoginInput, type LoginResult } from "./login-service";

type State = {
  loading: boolean;
  error: string | null;
};

export function useLogin() {
  const [state, setState] = useState<State>({ loading: false, error: null });

  const submit = useCallback(
    async (input: LoginInput): Promise<LoginResult | null> => {
      setState({ loading: true, error: null });
      try {
        const result = await login(input);
        return result;
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : "Unknown error";
        console.error(message);
        console.log(e);
        setState((s) => ({ ...s, error: message }));
        return null;
      } finally {
        setState((s) => ({ ...s, loading: false }));
      }
    },
    [],
  );

  return { submit, ...state };
}
