import { SectionHeaderProps } from "../lib/definitions";

export default function SectionHeader({
  headingLevel = "h2",
  className = "",
  children,
  ...props
}: SectionHeaderProps) {
  const headingLevels = {
    h2: "mb-3 text-orange-400 uppercase",
    h3: "font-medium text-white",
  };

  switch (headingLevel) {
    case "h2":
      return (
        <h2
          className={`${headingLevels[headingLevel]} ${className}`.trim()}
          {...props}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${headingLevels[headingLevel]} ${className}`.trim()}
          {...props}
        >
          {children}
        </h3>
      );
  }
}
