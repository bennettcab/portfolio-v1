export default function SkillsChips({ skills }: { skills: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-2">
      {skills.map((skill, i) => (
        <li
          key={i}
          className="border-t-foreground border-t py-1.5 pr-4 text-sm font-light text-white"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
