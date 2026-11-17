import Image from "next/image";
import ThumbnailImage from "/public/images/110x110.png";

export default function PlaceholderThumbnail() {
  return <Image src={ThumbnailImage} alt="Placeholder" />;
}
