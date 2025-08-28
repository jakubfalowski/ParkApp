import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { GateListSection } from "../components/gate-list-section";

vi.mock("../components/gate-option", () => ({
  GateOption: ({ label, selected }: { label: string; selected?: boolean }) => (
    <div role="listitem" data-selected={selected ? "true" : "false"}>
      {label}
    </div>
  ),
}));

describe("GateListSection", () => {
  const TITLE = "Długa nazwa pilota";
  const ITEMS = [
    "Szlaban Grzybowska 1",
    "Brama Garażowa 1",
    "Brama Wyjazdowa Śląska",
    "Szlaban Pomorska 32",
  ] as const;

  it("renderuje tytuł i opis pod listą", () => {
    render(<GateListSection title={TITLE} items={ITEMS} />);
    expect(
      screen.getByRole("heading", { name: TITLE, level: 2 }),
    ).toBeDefined();
    expect(screen.getByText("Wybierz bramę, by otworzyć")).toBeInTheDocument();
  });

  it("renderuje wszystkie pozycje z items w odpowiedniej kolejności", () => {
    render(<GateListSection title={TITLE} items={ITEMS} />);
    ITEMS.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("ustawia selected=true tylko dla elementu o indeksie selectedIndex", () => {
    render(<GateListSection title={TITLE} items={ITEMS} selectedIndex={2} />);
    const listItems = screen.getAllByRole("listitem");
    listItems.forEach((el, idx) => {
      const selected = el.getAttribute("data-selected");
      expect(selected).toBe(idx === 2 ? "true" : "false");
    });
  });

  it("domyślnie zaznacza pierwszy element (selectedIndex=0)", () => {
    render(<GateListSection title={TITLE} items={ITEMS} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems[0]).toHaveAttribute("data-selected", "true");
    listItems.slice(1).forEach((el) => {
      expect(el).toHaveAttribute("data-selected", "false");
    });
  });
});
