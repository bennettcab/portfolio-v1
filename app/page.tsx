import Link from "next/link";
import { ExperienceData, ProjectCardData } from "./lib/definitions";
import ExperienceCard from "./ui/experience/experience-card";
import PageHeader from "./ui/page-header";
import ProjectCard from "./ui/project/project-card";
import SectionHeader from "./ui/section-header";

export default function Home() {
  const experienceData: ExperienceData[] = [
    {
      title: "UX Designer & Web Developer",
      companyName: "Touchstone Group Associates",
      timeFrame: "2015 - Oct. 2026",
      descriptionParagraphs: [
        <>
          Designed and developed Ignite Recognition (
          <a
            href="https://www3.igniterecognition.com"
            target="_blank"
            className="text-orange-400 underline hover:text-orange-300"
          >
            igniterecognition.com
          </a>
          ), an employee engagement website and mobile app with the goal to make
          work fun. I spent about half of my time designing new pages and
          components for Ignite and the other half as the go-to guy, assisting
          with user interface & email development or creating graphics for sales
          & marketing.
        </>,
      ],
      skills: [
        "Javascript",
        "TypeScript",
        "Vue",
        "Vuetify",
        "Nuxt",
        "SQL",
        "C#",
        "Adobe XD",
        "Adobe Photoshop",
      ],
    },
    {
      title: "Frontend Web Developer",
      companyName: "MyMediabox, a division of Jonas Software USA",
      timeFrame: "2013 - 2015",
      descriptionParagraphs: [
        "Developed, upgraded, and maintained three web-based applications used for licensing intellectual property rights. Designed and implemented an icon suite used throughout the applications.",
      ],
      skills: ["Javascript", "HTML", "CSS", "Adobe Photoshop"],
    },
    {
      title: "User Interface Developer",
      companyName: "Touchstone Group Associates*",
      timeFrame: "2007 - 2013",
      descriptionParagraphs: [
        "Developed and maintained pixel perfect user interfaces for employee engagement websites. Clients include Volkswagen, BMW, Audi, and Fifth Third Bank.",
        <span className="text-xs italic">
          * Not a copy & paste error. I did work for Touchstone twice.
        </span>,
      ],
      skills: [
        "HTML",
        "CSS",
        "DotNetNuke",
        "Flash",
        "Actionscript",
        "Adobe Photoshop",
      ],
    },
  ];
  const projectCardsData: ProjectCardData[] = [
    {
      title: "Store Checkout",
      descriptionParagraphs: [
        "This was a fun one. Developing checkout pages correctly is critical. The Ignite Recognition checkout  increases the degree of difficulty with business rules accounting for 1099 status and digital / physical delivery.",
      ],
      thumnailName: "StoreCheckout",
      skills: ["Design", "Development", "TypeScript", "Vue", "Vuetify"],
    },
    {
      title: "Order Management Improvement",
      descriptionParagraphs: [
        "In order to provide customer service with missing information on a Store Order management page I exceeded expectations on a project with a quick turn around time.",
      ],
      thumnailName: "StoreOrderManagement",
      skills: ["Development", "TypeScript", "Vue", "Vuetify"],
    },
    {
      title: "Claim Program",
      descriptionParagraphs: [
        "This is one of Ignite Recognition’s tent poles. Users submit a claim and upon manager approval they earn a points reward.",
      ],
      thumnailName: "ChallengeClaimDetails",
      skills: ["Design", "Development", "TypeScript", "Vue", "Vuetify"],
    },
  ];

  return (
    <div className="justify-center md:flex md:gap-12 lg:gap-24">
      <PageHeader />
      <main className="mt-10 max-w-2xl">
        <div className="mb-8">
          <SectionHeader text="About" />
          <p className="my-3 font-light">
            Hi, I&rsquo;m Chad and I&rsquo;m looking for a new opportunity.
            I&rsquo;m a Web Developer and User Experience Designer with
            experience in photography, illustration, animation, and creating
            marketing materials.{" "}
            <em className="bg-orange-400/50 px-2 py-1.5 font-medium text-white italic">
              I enjoy the challenge of turning complicated business requirements
              into simple experiences for end users.
            </em>
          </p>
          <p className="my-3 font-light">
            My process is collaborative and detail oriented, with the goal to
            bring consistency and clarity to every page and component I make.
            Working on smaller, nimble teams during my career has taught me to
            be versatile and adaptable. In my previous job I was the go-to guy
            when you needed extra coverage here or some design help there.
          </p>
          <p className="my-3 font-light">
            After work hours I&rsquo;m usually trying to balance quality time
            with my wife and two daughters and making progress on that house or
            car project. On my favorite days I&rsquo;m usually wandering some
            landscape with a camera slung over my shoulder.
          </p>
        </div>
        <div className="mb-8">
          <SectionHeader text="Projects" />
          {projectCardsData.map((data, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <ProjectCard cardData={data} />
            </div>
          ))}
          <div className="text-xs italic">* More info coming soon...</div>
        </div>
        <div className="mb-8">
          <SectionHeader text="Experience" />
          {experienceData.map((data, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <ExperienceCard experienceData={data} />
            </div>
          ))}
          <div>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center font-medium text-white after:ml-1 after:font-[Material_Symbols_Outlined] after:text-xl after:leading-0 after:content-['arrow\_outward'] hover:text-orange-400 hover:after:mb-1 hover:after:ml-2"
            >
              View My Resume
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
