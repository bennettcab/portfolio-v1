import Link from "next/link";
import { AppLinkProps } from "../lib/definitions";
import { LinkStyles } from "../lib/constants";

export default function AppLink({
  href,
  openInNewWindow = false,
  children,
  className = "",
}: AppLinkProps) {
  return (
    <Link
      href={href}
      target={openInNewWindow ? "_blank" : undefined}
      rel={openInNewWindow ? "noopener noreferrer" : undefined}
      className={`${LinkStyles} ${className}`.trim()}
    >
      <span className="relative">{children}</span>
    </Link>
  );
}
