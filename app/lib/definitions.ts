export type ExperienceData = {
  title: string;
  companyName: string;
  timeFrame: string;
  descriptionParagraphs: React.ReactNode[];
  skills: string[];
};

export type ProjectCardData = {
  title: string;
  linkUrl?: string;
  descriptionParagraphs: React.ReactNode[];
  thumnailName: ThumbnailNames;
  skills: string[];
};

export type SocialData = {
  name: string;
  url: string;
};

export type ThumbnailNames =
  | undefined
  | "StoreCheckout"
  | "StoreOrderManagement"
  | "ChallengeClaimDetails";
