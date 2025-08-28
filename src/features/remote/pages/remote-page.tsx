import clsx from "clsx";
import { useMediaQuery } from "react-responsive";

import { RemoteHeader } from "../components/remote-header";
import { RemoteHero } from "../components/remote-hero";
import { GateListSection } from "../components/gate-list-section";
import { PaginationDots } from "../components/pagination-dots";
import { BottomNav } from "../components/bottom-nav";

const ITEMS = [
  "Szlaban Grzybowska 1",
  "Brama Garażowa 1",
  "Brama Wyjazdowa Śląska",
  "Szlaban Pomorska 32",
];

export default function RemotePage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="h-screen flex flex-col justify-between pb-16 gap-12">
      <RemoteHeader isDesktop={isDesktop} />

      <section
        className={clsx("flex gap-6 pr-6", isDesktop && "justify-center")}
      >
        <RemoteHero isDesktop={isDesktop} />
        <GateListSection
          title="Długa nazwa pilota"
          items={ITEMS}
          selectedIndex={0}
        />
      </section>

      <PaginationDots
        total={4}
        activeIndex={1}
        className={clsx("w-48 mx-auto", !isDesktop ? "pb-20" : "pb-8")}
      />

      {!isDesktop && <BottomNav />}
    </div>
  );
}
