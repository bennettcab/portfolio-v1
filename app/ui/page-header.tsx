import { SocialData } from "../lib/definitions";
import Icon from "./icons/social-icon";

export default function PageHeader() {
  const socials: SocialData[] = [
    { name: "GitHub", url: "https://github.com/bennettcab" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chad-bennett-a22367b0/",
    },
  ];

  return (
    <header className="my-10 w-66">
      <h1 className="text-[4rem]/[1.21] font-extralight text-white uppercase">
        Chad Bennett
      </h1>
      <div className="my-2 text-2xl font-light">
        <div>Web Developer</div>
        <div>User Experience Designer</div>
      </div>
      <p className="mt-4 mb-6">
        I turn complicated ideas into simple, useful, and human web experiences.
      </p>
      <div className="flex flex-wrap text-white">
        {socials.map((data, index) => (
          <a
            key={index}
            href={data.url}
            aria-label={data.name}
            className="mr-4 block h-7 w-7 last:mr-0 hover:text-orange-400"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name={data.name} />
          </a>
        ))}
      </div>
    </header>
  );
}
