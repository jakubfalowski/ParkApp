import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PaginationDots } from "../components/pagination-dots";

describe("PaginationDots", () => {
  it("renderuje zadaną liczbę kropek", () => {
    render(
      <PaginationDots total={4} activeIndex={0} setActiveIndex={() => {}} />,
    );
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(4);
  });

  it("oznacza właściwą kropkę jako aktywną (aria-selected)", () => {
    const activeIndex = 2;
    render(
      <PaginationDots
        total={4}
        activeIndex={activeIndex}
        setActiveIndex={() => {}}
      />,
    );

    const tabs = screen.getAllByRole("tab");
    tabs.forEach((tab, idx) => {
      const isActive = tab.getAttribute("aria-selected") === "true";
      expect(isActive).toBe(idx === activeIndex);
    });
  });

  it("wywołuje setActiveIndex po kliknięciu w kropkę", async () => {
    const user = userEvent.setup();
    const onSet = vi.fn();

    render(<PaginationDots total={3} activeIndex={0} setActiveIndex={onSet} />);

    const tabs = screen.getAllByRole("tab");
    await user.click(tabs[1]);
    expect(onSet).toHaveBeenCalledWith(1);

    await user.click(tabs[2]);
    expect(onSet).toHaveBeenCalledWith(2);
  });

  it("ustawia aria-label na tabliście (domyślny i własny)", () => {
    const { rerender } = render(
      <PaginationDots total={2} activeIndex={0} setActiveIndex={() => {}} />,
    );
    expect(
      screen.getByRole("tablist", { name: "Stronicowanie pilotów" }),
    ).toBeInTheDocument();

    rerender(
      <PaginationDots
        total={2}
        activeIndex={0}
        setActiveIndex={() => {}}
        ariaLabel="Paginacja pilotów"
      />,
    );
    expect(
      screen.getByRole("tablist", { name: "Paginacja pilotów" }),
    ).toBeInTheDocument();
  });

  it("przyciski mają czytelne etykiety aria-label (Strona X z Y)", () => {
    render(
      <PaginationDots total={3} activeIndex={1} setActiveIndex={() => {}} />,
    );
    expect(
      screen.getByRole("tab", { name: "Strona 1 z 3" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: "Strona 2 z 3" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: "Strona 3 z 3" }),
    ).toBeInTheDocument();
  });
});
