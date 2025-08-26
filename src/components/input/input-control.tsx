import {
  useState,
  useCallback,
  InputHTMLAttributes,
  ReactNode,
  MouseEvent,
} from "react";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";
import {
  TextField,
  type TextFieldProps,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export type ValueTransform<T> = {
  parse?: (raw: string) => T;
  format?: (value: T) => string | number | undefined;
  onBlur?: (value: T) => T;
};

// InputControl — TYP
export type SafeTextFieldProps = Omit<
  TextFieldProps,
  "name" | "value" | "inputRef" | "error" | "label" | "type" | "InputProps"
> & {
  InputProps?: TextFieldProps["InputProps"];
};

const A11Y = {
  showPwd: "Pokaż hasło",
  hidePwd: "Ukryj hasło",
} as const;

const DEFAULTS = {
  type: "text" as InputHTMLAttributes<HTMLInputElement>["type"],
  passwordToggle: true,
  fullWidth: true,
} as const;

const getNativeRequired = (rules?: RegisterOptions): boolean =>
  typeof rules?.required === "boolean" ? rules.required : false;

const pickHelperText = (
  errorMsg?: string,
  helperFromProps?: ReactNode,
  description?: ReactNode,
): ReactNode | undefined =>
  errorMsg ?? helperFromProps ?? description ?? undefined;

export type InputControlProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  rules?: RegisterOptions<TFieldValues, TName>;
  description?: ReactNode;
  transform?: ValueTransform<TFieldValues[TName]>;
  requiredVisual?: boolean;
  passwordToggle?: boolean;
  textFieldProps?: SafeTextFieldProps;
  fullWidth?: boolean;
};

export function InputControl<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  type = DEFAULTS.type,
  rules,
  description,
  transform,
  requiredVisual,
  passwordToggle = DEFAULTS.passwordToggle,
  textFieldProps,
  fullWidth = DEFAULTS.fullWidth,
}: InputControlProps<TFieldValues, TName>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const handleTogglePassword = useCallback(() => {
    setShowPassword((s) => !s);
  }, []);

  const handleMouseDownIcon = useCallback((e: MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        const { ref, value, onChange, onBlur, ...restField } = field;
        let displayedValue: string | number | undefined;
        if (transform?.format) {
          displayedValue = transform.format(value as TFieldValues[TName]);
        } else if (typeof value === "string" || typeof value === "number") {
          displayedValue = value;
        } else {
          displayedValue = "";
        }

        const hasNativeRequired = getNativeRequired(
          rules as RegisterOptions | undefined,
        );

        const inputType: InputHTMLAttributes<HTMLInputElement>["type"] =
          isPassword && passwordToggle
            ? showPassword
              ? "text"
              : "password"
            : type;

        const externalInputProps = textFieldProps?.InputProps ?? {};
        const mergedEndAdornment = (
          <>
            {externalInputProps?.endAdornment}
            {isPassword && passwordToggle ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? A11Y.hidePwd : A11Y.showPwd}
                  aria-pressed={showPassword}
                  onClick={handleTogglePassword}
                  onMouseDown={handleMouseDownIcon}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null}
          </>
        );

        const helperTextNode = pickHelperText(
          fieldState.error?.message,
          textFieldProps?.helperText,
          description,
        );

        return (
          <TextField
            {...restField}
            inputRef={ref}
            label={label}
            type={inputType}
            value={displayedValue}
            onChange={(e) => {
              const raw = (e.target as HTMLInputElement).value;
              const parsed = transform?.parse ? transform.parse(raw) : raw;
              onChange(parsed);
              textFieldProps?.onChange?.(e);
            }}
            onBlur={(e) => {
              const current = value as TFieldValues[TName];
              if (transform?.onBlur) {
                const next = transform.onBlur(current);
                if (next !== current) onChange(next);
              }
              onBlur();
              textFieldProps?.onBlur?.(e);
            }}
            error={Boolean(fieldState.error)}
            helperText={helperTextNode}
            required={hasNativeRequired || Boolean(textFieldProps?.required)}
            InputLabelProps={{
              ...textFieldProps?.InputLabelProps,
              required:
                hasNativeRequired ||
                Boolean(textFieldProps?.required) ||
                Boolean(requiredVisual),
            }}
            fullWidth={fullWidth}
            {...textFieldProps}
            InputProps={{
              ...externalInputProps,
              endAdornment: mergedEndAdornment,
            }}
          />
        );
      }}
    />
  );
}
