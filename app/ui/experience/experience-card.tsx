import { ExperienceData } from "@/app/lib/definitions";
import SkillsChips from "../skills-chips";

export default function ExperienceCard({
  experienceData,
}: {
  experienceData: ExperienceData;
}) {
  return (
    <div>
      <h3 className="font-medium text-white">{experienceData.title}</h3>
      <div className="flex justify-between font-light">
        <h4 className="text-sm">{experienceData.companyName}</h4>
        <div className="text-sm italic">{experienceData.timeFrame}</div>
      </div>
      {experienceData.descriptionParagraphs.map((paragraph, index) => (
        <p className="my-2 text-sm font-light" key={index}>
          {paragraph}
        </p>
      ))}
      <SkillsChips skills={experienceData.skills} />
    </div>
  );
}
