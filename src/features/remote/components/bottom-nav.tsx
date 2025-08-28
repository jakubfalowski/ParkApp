import { IconMap } from "assets/icons/map";
import { IconScan } from "assets/icons/scan";
import { IconCar } from "assets/icons/car";
import { IconRemote } from "assets/icons/remote";
import { IconMenu } from "assets/icons/menu";

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
