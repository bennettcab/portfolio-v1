import { ProjectCardData } from "@/app/lib/definitions";
import SkillsChips from "../skills-chips";
import Link from "next/link";
import Thumbnail from "../thumbnail/thumbnail";

export default function ProjectCard({
  cardData,
}: {
  cardData: ProjectCardData;
}) {
  const content: React.ReactNode = (
    <>
      <div className="w-24 flex-none sm:w-27.5">
        <Thumbnail name={cardData.thumnailName} />
      </div>
      <div className="grow">
        <h3
          className={
            cardData.linkUrl
              ? "inline-flex items-center font-medium text-white group-hover:text-orange-400 after:ml-1 after:font-[Material_Symbols_Outlined] after:text-2xl after:leading-0 group-hover:after:ml-2" +
                String.raw` after:content-['chevron\_right']`
              : "font-medium text-white"
          }
        >
          {cardData.title}*
        </h3>
        {cardData.descriptionParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-2 text-sm font-light">
            {paragraph}
          </p>
        ))}
        <SkillsChips skills={cardData.skills} />
      </div>
    </>
  );

  if (cardData.linkUrl) {
    return (
      <Link href={cardData.linkUrl} className="group flex gap-4">
        {content}
      </Link>
    );
  } else {
    return <div className="flex gap-4">{content}</div>;
  }
}
