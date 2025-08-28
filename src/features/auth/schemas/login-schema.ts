import { z } from "zod";
import { LOGIN_VALIDATION_MESSAGES as M } from "@utils/LOGIN_VALIDATION_MESSAGE";

const toEmptyString = (v: unknown) => (v == null ? "" : String(v));

export const loginSchema = z.object({
  email: z.preprocess(
    toEmptyString,
    z
      .string()
      .trim()
      .min(1, { message: M.email.required })
      .email({ message: M.email.invalid })
      .transform((v) => v.toLowerCase()),
  ),
  password: z.preprocess(
    toEmptyString,
    z.string().trim().min(6, { message: M.password.tooShort }),
  ),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
