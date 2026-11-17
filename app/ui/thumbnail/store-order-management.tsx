import Image from "next/image";
import ThumbnailImage from "/public/images/projects/store-order-management/order-management-1.png";

export default function StoreOrderManagementThumbnail() {
  return (
    <Image
      src={ThumbnailImage}
      alt="Store order management for Ignite Recognition"
    />
  );
}
