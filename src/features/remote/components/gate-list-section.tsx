import { GateOption } from "../components/gate-option";

type Props = {
  title: string;
  items: readonly string[];
  selectedIndex?: number;
};

export function GateListSection({ title, items, selectedIndex = 0 }: Props) {
  return (
    <div>
      <h2 className="font-dm font-bold text-2xl leading-10">{title}</h2>

      <div className="flex flex-col gap-4 mt-10">
        {items.map((label, idx) => (
          <GateOption
            key={label}
            label={label}
            selected={idx === selectedIndex}
          />
        ))}
      </div>

      <p className="font-dm text-[18px] mt-10 leading-6 -translate-x-2">
        Wybierz bramę, by otworzyć
      </p>
    </div>
  );
}
