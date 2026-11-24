import React from "react";

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
  | "ChallengeClaimDetails"
  | "IgniteGames";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: "sm" | "base" | "lg";
  variant?: "default" | "muted";
};

export type SectionHeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
  backButton?: boolean;
};

export type BackButtonProps = {
  fallbackHref?: string;
  children?: React.ReactNode;
  className?: string;
};

export type AppLinkProps = {
  href: string;
  openInNewWindow?: boolean;
  children: React.ReactNode;
  className?: string;
};
