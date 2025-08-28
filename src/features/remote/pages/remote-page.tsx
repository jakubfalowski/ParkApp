import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import { RemoteHeader } from "../components/remote-header";
import { RemoteHero } from "../components/remote-hero";
import { GateListSection } from "../components/gate-list-section";
import { PaginationDots } from "../components/pagination-dots";
import { BottomNav } from "../components/bottom-nav";

const ITEMS = [
  [
    "Szlaban Grzybowska 111",
    "Brama Garażowa 111",
    "Brama Wyjazdowa Śląska 111",
    "Szlaban Pomorska 111",
  ],
  [
    "Szlaban Grzybowska 222",
    "Brama Garażowa 222",
    "Brama Wyjazdowa Śląska 222",
    "Szlaban Pomorska 222",
  ],
  [
    "Szlaban Grzybowska 333",
    "Brama Garażowa 333",
    "Brama Wyjazdowa Śląska 333",
    "Szlaban Pomorska 333",
  ],
  [
    "Szlaban Grzybowska 444",
    "Brama Garażowa 444",
    "Brama Wyjazdowa Śląska 444",
    "Szlaban Pomorska 444",
  ],
];

export default function RemotePage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [page, setPage] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-between pb-16 gap-12">
      <RemoteHeader isDesktop={isDesktop} />

      <section
        className={clsx("flex gap-6 pr-6", isDesktop && "justify-center")}
      >
        <RemoteHero isDesktop={isDesktop} />
        <GateListSection
          title="Długa nazwa pilota"
          items={ITEMS[page]}
          selectedIndex={0}
        />
      </section>

      <PaginationDots total={4} activeIndex={page} setActiveIndex={setPage} />

      {!isDesktop && <BottomNav />}
    </div>
  );
}
