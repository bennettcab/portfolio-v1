import Image from "next/image";
import ThumbnailImage from "/public/images/projects/challenge-claim/claim-details-1.png";

export default function ChallengeClaimDetailsThumbnail() {
  return (
    <Image
      src={ThumbnailImage}
      alt="Claim challenge details page for Ignite Recognition"
    />
  );
}
