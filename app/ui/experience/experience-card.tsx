import { ExperienceData } from "@/app/lib/definitions";
import SkillsChips from "../skills-chips";
import { Paragraph } from "../paragraph";
import SectionHeader from "../section-header";

export default function ExperienceCard({
  experienceData,
}: {
  experienceData: ExperienceData;
}) {
  return (
    <div>
      <SectionHeader headingLevel="h3">{experienceData.title}</SectionHeader>
      <div className="flex justify-between font-light">
        <h4 className="text-sm">{experienceData.companyName}</h4>
        <div className="text-sm italic">{experienceData.timeFrame}</div>
      </div>
      {experienceData.descriptionParagraphs.map((paragraph, index) => (
        <Paragraph size="sm" key={index}>
          {paragraph}
        </Paragraph>
      ))}
      <SkillsChips skills={experienceData.skills} />
    </div>
  );
}
