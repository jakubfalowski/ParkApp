import { remoteImage, remoteDesktopImage } from "@utils/images";

type Props = { isDesktop: boolean };

export function RemoteHero({ isDesktop }: Props) {
  return (
    <img
      src={isDesktop ? remoteDesktopImage : remoteImage}
      alt="Pilot z kluczykiem"
      className="select-none"
      draggable={false}
    />
  );
}
