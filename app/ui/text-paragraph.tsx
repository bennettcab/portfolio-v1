import { ParagraphProps } from "../lib/definitions";

export function Paragraph({
  size = "base",
  variant = "default",
  className = "",
  children,
  ...props
}: ParagraphProps) {
  const sizes = {
    sm: "my-2 text-sm",
    base: "my-3",
    lg: "my-4 text-lg",
  };

  const variants = {
    default: "font-light",
    muted: "font-light opacity-50",
  };

  return (
    <p
      className={`${sizes[size]} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}
