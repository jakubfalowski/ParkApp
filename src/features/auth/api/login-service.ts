import { apolloClient } from "@services/client";
import { LOGIN_MUTATION } from "./login";
import { authStorage } from "@services/auth-storage";

export type LoginInput = { email: string; password: string };
export type LoginResult = { token: string | null };

export async function login(input: LoginInput): Promise<LoginResult> {
  const { data } = await apolloClient.mutate<{
    loginUser: { token: string | null };
  }>({
    mutation: LOGIN_MUTATION,
    variables: input,
  });

  const token = data?.loginUser?.token ?? null;

  if (token) authStorage.set(token);

  return { token };
}
