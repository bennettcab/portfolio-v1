import { SectionHeaderProps } from "../lib/definitions";
import BackButton from "./back-button";

export default function SectionHeader({
  as: Component = "h2",
  className = "",
  children,
  backButton = false,
  ...props
}: SectionHeaderProps) {
  const Heading = Component;
  const headingStyles = {
    h2: "text-orange-400 uppercase",
    h3: "font-medium text-white",
    h4: "font-medium text-white text-sm",
  };

  return (
    <div
      className={`${backButton ? "flex justify-between" : undefined} ${Heading === "h2" ? "mb-3" : undefined}`.trim()}
    >
      <Heading
        className={`${headingStyles[Heading]} ${className}`.trim()}
        {...props}
      >
        {children}
      </Heading>
      {backButton ? <BackButton /> : null}
    </div>
  );
}
