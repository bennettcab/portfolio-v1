import IconGitHub from "./github";
import IconLinkedin from "./linkedin";

export default function Icon({ name }: { name: string }) {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "LinkedIn":
      return <IconLinkedin />;
  }
}
