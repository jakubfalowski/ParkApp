import clsx from "clsx";

type GateOptionProps = {
  label: string;
  selected?: boolean;
  className?: string;
};

export function GateOption({
  label,
  selected = false,
  className,
}: GateOptionProps) {
  return (
    <div
      className={clsx(
        "w-full min-h-12 px-5 py-3 rounded-xl font-lato text-[17px] leading-none",
        "transition-colors duration-150",
        selected
          ? "bg-dark-blue text-white border border-dark-blue"
          : "bg-white text-dark-blue border border-dark-blue/80",
        className,
      )}
    >
      <span className="block text-center font-medium">{label}</span>
    </div>
  );
}
