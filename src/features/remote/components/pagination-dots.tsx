import clsx from "clsx";
import { useMemo } from "react";
import { IconCircle } from "assets/icons/circle";

type Props = {
  total: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  ariaLabel?: string;
};

export function PaginationDots({
  total,
  activeIndex,
  setActiveIndex,
  ariaLabel = "Stronicowanie pilotów",
}: Props) {
  const dots = useMemo(() => Array.from({ length: total }), [total]);

  return (
    <div
      className="flex gap-3 justify-center mt-6"
      role="tablist"
      aria-label={ariaLabel}
    >
      {dots.map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Strona ${i + 1} z ${total}`}
            onClick={() => setActiveIndex(i)}
            className={clsx(
              "inline-flex items-center justify-center rounded-full",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dark-blue/60",
              "h-5 w-5",
            )}
          >
            <IconCircle fill={isActive ? "var(--color-dark-blue)" : "white"} />
          </button>
        );
      })}
    </div>
  );
}
