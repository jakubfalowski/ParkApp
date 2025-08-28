import clsx from "clsx";
import { IconCircle } from "@utils/icons/circle";

type Props = {
  total: number;
  activeIndex: number;
  className?: string;
};

export function PaginationDots({ total, activeIndex, className }: Props) {
  return (
    <div className={clsx("flex justify-between", className)}>
      {Array.from({ length: total }).map((_, i) => (
        <IconCircle
          key={i}
          fill={i === activeIndex ? "var(--color-dark-blue)" : "white"}
        />
      ))}
    </div>
  );
}
