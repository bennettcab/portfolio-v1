import { ThumbnailNames } from "@/app/lib/definitions";
import PlaceholderThumbnail from "./placeholder";
import StoreCheckoutThumbnail from "./store-checkout";
import StoreOrderManagementThumbnail from "./store-order-management";
import ChallengeClaimDetailsThumbnail from "./challenge-claim-details";
import IgniteGamesThumbnail from "./ignite-games";

export default function Thumbnail({ name }: { name: ThumbnailNames }) {
  switch (name) {
    case "StoreCheckout":
      return <StoreCheckoutThumbnail />;
    case "StoreOrderManagement":
      return <StoreOrderManagementThumbnail />;
    case "ChallengeClaimDetails":
      return <ChallengeClaimDetailsThumbnail />;
    case "IgniteGames":
      return <IgniteGamesThumbnail />;
    default:
      return <PlaceholderThumbnail />;
  }
}
