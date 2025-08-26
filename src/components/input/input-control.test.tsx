import React from "react";

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useForm } from "react-hook-form";

import { InputAdornment } from "@mui/material";

import { InputControl, type ValueTransform } from "./input-control";

type FormValues = {
  email: string;
  password: string;
  age: number | string;
  misc?: string;
};

function TestForm({
  defaultValues,
  children,
}: {
  defaultValues?: Partial<FormValues>;
  children: (args: ReturnType<typeof useForm<FormValues>>) => React.ReactNode;
}) {
  const methods = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      age: "",
      misc: "",
      ...defaultValues,
    },
    mode: "onBlur",
  });
  return (
    <form onSubmit={methods.handleSubmit(() => {})}>{children(methods)}</form>
  );
}

const getInput = (label: string) =>
  screen.getByLabelText(
    new RegExp(`^${label}\\s*\\*?$`, "i"),
  ) as HTMLInputElement;

describe("InputControl", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renderuje label i podstawowe propsy", () => {
    const address = "twoj@adres";
    const email = "Email";
    render(
      <TestForm>
        {({ control }) => (
          <InputControl
            control={control}
            name="email"
            label={email}
            textFieldProps={{ placeholder: address }}
          />
        )}
      </TestForm>,
    );
    const input = getInput(email);
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe(address);
  });

  it("priorytet helpera: helperText > description", async () => {
    const helperText = "Helper z propsów";
    const description = "Opis z dołu";
    render(
      <TestForm>
        {({ control }) => (
          <InputControl
            control={control}
            name="misc"
            label="Misc"
            description={description}
            textFieldProps={{ helperText: helperText }}
          />
        )}
      </TestForm>,
    );
    expect(screen.getByText(helperText)).toBeInTheDocument();

    render(
      <TestForm>
        {({ control }) => (
          <InputControl
            control={control}
            name="misc"
            label="Desc only"
            description={description}
          />
        )}
      </TestForm>,
    );
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("ustawia atrybut required natywny gdy rules.required=true albo textFieldProps.required", () => {
    const label1 = "E1";
    const { rerender } = render(
      <TestForm>
        {({ control }) => (
          <InputControl
            control={control}
            name="email"
            label={label1}
            rules={{ required: true }}
          />
        )}
      </TestForm>,
    );
    expect(getInput(label1)).toBeRequired();
    const label2 = "E2";

    rerender(
      <TestForm>
        {({ control }) => (
          <InputControl
            control={control}
            name="misc"
            label={label2}
            textFieldProps={{ required: true }}
          />
        )}
      </TestForm>,
    );
    expect(getInput(label2)).toBeRequired();
  });

  it("pokazuje gwiazdkę przy label gdy requiredVisual=true nawet bez natywnego required", () => {
    const text = "Pole";
    render(
      <TestForm>
        {({ control }) => (
          <InputControl
            control={control}
            name="misc"
            label={text}
            requiredVisual
            textFieldProps={{ required: false }}
          />
        )}
      </TestForm>,
    );
    const label = screen.getByText(text, { selector: "label" });
    expect(label.textContent).toMatch(/\*/);
    expect(getInput("Pole")).not.toBeRequired();
  });

  it("brak toggla gdy type!='password' lub passwordToggle=false", () => {
    const { rerender } = render(
      <TestForm>
        {({ control }) => (
          <InputControl control={control} name="misc" label="T1" type="text" />
        )}
      </TestForm>,
    );
    expect(screen.queryByRole("button", { name: /pokaż hasło/i })).toBeNull();

    rerender(
      <TestForm>
        {({ control }) => (
          <InputControl
            control={control}
            name="password"
            label="T2"
            type="password"
            passwordToggle={false}
          />
        )}
      </TestForm>,
    );
    expect(screen.queryByRole("button", { name: /pokaż hasło/i })).toBeNull();
  });

  it("merguje InputProps i zachowuje istniejący endAdornment", () => {
    const testId = "ext-end";
    render(
      <TestForm>
        {({ control }) => (
          <InputControl
            control={control}
            name="password"
            label="Sekret"
            type="password"
            textFieldProps={{
              InputProps: {
                endAdornment: (
                  <InputAdornment position="end">
                    <span data-testid={testId}>EXT</span>
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      </TestForm>,
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /pokaż hasło/i }),
    ).toBeInTheDocument();
  });

  it("wykonuje transform.parse przy onChange oraz przekazuje onChange z textFieldProps", async () => {
    const user = userEvent.setup();
    const tfOnChange = vi.fn();
    const parse: ValueTransform<number>["parse"] = (raw) =>
      Number(raw.replace(/\D/g, ""));

    render(
      <TestForm>
        {({ control }) => (
          <InputControl
            control={control}
            name="age"
            label="Wiek"
            transform={{ parse }}
            textFieldProps={{ onChange: tfOnChange }}
          />
        )}
      </TestForm>,
    );

    const input = getInput("Wiek");
    await user.type(input, "1a2b3");
    expect(tfOnChange).toHaveBeenCalled();
  });

  it("wykonuje transform.format przy wyświetlaniu wartości", () => {
    const label = "Masa";
    const format: (v: string | number) => string | number | undefined = (v) =>
      typeof v === "number" ? `${v} kg` : "";
    render(
      <TestForm defaultValues={{ age: 5 }}>
        {({ control }) => (
          <InputControl
            control={control}
            name="age"
            label={label}
            transform={{ format }}
          />
        )}
      </TestForm>,
    );
    expect(getInput(label).value).toBe("5 kg");
  });

  it("nie robi niekontrolowanego inputu dla wartości nienapisowych/nie-numerycznych (fallback na pusty string)", () => {
    const label = "Wartość nietypowa";
    render(
      <TestForm defaultValues={{ age: undefined }}>
        {({ control }) => (
          <InputControl control={control} name="age" label={label} />
        )}
      </TestForm>,
    );
    expect(getInput(label).value).toBe("");
  });
});
