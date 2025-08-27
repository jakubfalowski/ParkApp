import { IconCar } from "@utils/icons/car";
import { IconCircle } from "@utils/icons/circle";
import { IconLeftArrow } from "@utils/icons/left-arrow";
import { IconMap } from "@utils/icons/map";
import { IconMenu } from "@utils/icons/menu";
import { IconRemote } from "@utils/icons/remote";
import { IconScan } from "@utils/icons/scan";
import { remoteImage, remoteWithKeyImage } from "@utils/images";
import { GateOption } from "../components/gate-option";

const items = [
  "Szlaban Grzybowska 1",
  "Brama Garażowa 1",
  "Brama Wyjazdowa Śląska",
  "Szlaban Pomorska 32",
];

export default function RemotePage() {
  return (
    <div className="h-screen flex flex-col justify-between pb-16">
      <header className="relative h-64 bg-gradient-to-b from-dark-yellow to-light-yellow px-6 py-8 rounded-b-2xl">
        <div className="flex gap-6 items-start">
          <button aria-label="Powrót">
            <IconLeftArrow />
          </button>
          <div className="text-[2rem] font-bold mt-3 font-poppins leading-10">
            <p>Otwórz</p>
            <p>bramę</p>
          </div>
        </div>

        <img
          className="absolute top-0 right-0"
          src={remoteWithKeyImage}
          alt="background"
        />
      </header>
      <section className="flex gap-6 pr-6">
        <img src={remoteImage} alt="remote" />
        <div>
          <p className="font-dm font-bold text-2xl leading-10">
            Długa nazwa pilota
          </p>
          <div className="flex flex-col gap-4 mt-10">
            {items.map((label) => (
              <GateOption
                key={label}
                label={label}
                selected={items[0] === label}
              />
            ))}
          </div>
          <p className="font-dm text-[18px] mt-10 leading-6 -translate-x-2">
            Wybierz bramę, by otworzyć
          </p>
        </div>
      </section>
      <section className="w-48 mx-auto pb-16 flex justify-between">
        <IconCircle fill="white" />
        <IconCircle fill="var(--color-dark-blue)" />
        <IconCircle fill="white" />
        <IconCircle fill="white" />
      </section>
      <footer className="w-full fixed bottom-0 left-0 flex justify-around items-center h-16">
        <IconMap />
        <IconScan />
        <IconCar />
        <IconRemote />
        <IconMenu />
      </footer>
    </div>
  );
}
