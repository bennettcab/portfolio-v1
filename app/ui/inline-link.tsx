import { InlineLinkProps } from "../lib/definitions";

export default function InlineLink({
  href,
  openInNewWindow = false,
  children,
}: InlineLinkProps) {
  return (
    <a
      href={href}
      target={openInNewWindow ? "_blank" : undefined}
      rel={openInNewWindow ? "noopener noreferrer" : undefined}
      className="relative inline-block cursor-pointer font-medium text-orange-400 before:absolute before:-inset-1 before:block before:-skew-y-2 hover:text-white hover:before:bg-orange-400/50"
    >
      <span className="relative">{children}</span>
    </a>
  );
}
