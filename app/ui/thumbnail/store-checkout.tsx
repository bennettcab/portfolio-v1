import Image from "next/image";
import ThumbnailImage from "/public/images/projects/store-checkout/cart-1.png";

export default function StoreCheckoutThumbnail() {
  return <Image src={ThumbnailImage} alt="Store cart for Ignite Recognition" />;
}
