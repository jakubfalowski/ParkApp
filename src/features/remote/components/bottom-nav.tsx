import { IconMap } from "@utils/icons/map";
import { IconScan } from "@utils/icons/scan";
import { IconCar } from "@utils/icons/car";
import { IconRemote } from "@utils/icons/remote";
import { IconMenu } from "@utils/icons/menu";

export function BottomNav() {
  return (
    <footer className="w-full fixed bottom-0 left-0 flex justify-around items-center h-16 bg-white">
      <IconMap />
      <IconScan />
      <IconCar />
      <IconRemote />
      <IconMenu />
    </footer>
  );
}
