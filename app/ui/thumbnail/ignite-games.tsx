import Image from "next/image";
import ThumbnailImage from "/public/images/projects/ignite-games/space-race-thumbnail.png";

export default function IgniteGamesThumbnail() {
  return (
    <Image
      src={ThumbnailImage}
      alt="Space Race game launcher on a 1980s computer monitor"
    />
  );
}
