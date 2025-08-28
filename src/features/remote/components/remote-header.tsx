import clsx from "clsx";
import { IconLeftArrow } from "@utils/icons/left-arrow";
import { remoteWithKeyImage } from "@utils/images";

type Props = { isDesktop: boolean };

export function RemoteHeader({ isDesktop }: Props) {
  return (
    <header className="relative h-64 bg-gradient-to-b from-dark-yellow to-light-yellow px-6 py-8 rounded-b-2xl overflow-hidden">
      <div
        className={clsx(
          "flex gap-6",
          isDesktop ? "items-end h-full" : "items-start",
        )}
      >
        <div aria-hidden>
          <IconLeftArrow />
        </div>

        {isDesktop ? (
          <h1 className="text-4xl font-bold mt-3 font-poppins leading-10">
            Otwórz bramę
          </h1>
        ) : (
          <h1 className="text-[2rem] font-bold mt-3 font-poppins leading-10">
            <span className="block">Otwórz</span>
            <span className="block">bramę</span>
          </h1>
        )}
      </div>

      <img
        className="absolute top-0 right-0"
        src={remoteWithKeyImage}
        alt="pilot z kluczykiem"
        aria-hidden
      />
    </header>
  );
}
