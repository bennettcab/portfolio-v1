import { Paragraph } from "@/app/ui/text-paragraph";
import AppLink from "@/app/ui/link-app";
import SectionHeader from "@/app/ui/header-section";
import Image from "next/image";
import ImageSpaceRace1 from "/public/images/projects/ignite-games/space-race-1.png";
import ImageSpaceRace2 from "/public/images/projects/ignite-games/space-race-2.png";
import ImageSpaceRace3 from "/public/images/projects/ignite-games/space-race-3.png";
import ImageSpaceRace4 from "/public/images/projects/ignite-games/space-race-4.png";
import ImageScratchOff1 from "/public/images/projects/ignite-games/scratch-off-1.png";
import ImageScratchOff2 from "/public/images/projects/ignite-games/scratch-off-2.png";
import ImagePlinkGo1 from "/public/images/projects/ignite-games/plink-go-1.png";
import ImagePlinkGo2 from "/public/images/projects/ignite-games/plink-go-2.png";
import ImagePlinkGo3 from "/public/images/projects/ignite-games/plink-go-3.png";

export default function StoreCheckoutPage() {
  return (
    <>
      <SectionHeader as="h2" backButton={true}>
        Design Project
      </SectionHeader>
      <section className="mt-5">
        <SectionHeader as="h3">Ignite Games</SectionHeader>
        <Paragraph>
          I should admit this up front: I’m not a video gamer. Board games? Yes!
          Card games? I’m in! As a kid, I played Sonic, racing games, football
          games, and plenty of Tetris on my TI-85 calculator&mdash;until I lost
          it. I’ve tried mobile games, too, but they never really stuck.
        </Paragraph>
        <Paragraph>
          A couple years back I was tasked to design some games for{" "}
          <AppLink href="https://www3.igniterecognition.com" openInNewWindow>
            Ignite Recognition
          </AppLink>
          . We wanted to create some variety in the game rewards we offered in
          our product. In Ignite, games are really just a fun way to get a
          randomly selected reward amount. Our business rules didn’t allow user
          skill, or the illusion of skill, to determine the outcome.
        </Paragraph>
        <Paragraph>
          When I pitched ideas, I went old school for a few reasons. I was
          trying to keep it simple so we can stay stay on budget, on schedule,
          and appeal to our professional audience. Also, see the first
          paragraph. We landed on a space race game, a scratch off game, and a
          plinko style game.
        </Paragraph>
      </section>
      <section className="mt-10">
        <SectionHeader as="h3">Space Race</SectionHeader>
        <Paragraph>
          I know if Andy Weir were ever to see this game he would give me a hard
          time for its scientific inaccuracies, but rockets just look better
          burning fuel. For Space Race, you click the launch button, there’s a
          countdown, and then the rockets race through an asteroid field to the
          finish line. Because the reward was selected randomly, the race is
          just for fun: the winning rocket reveales the reward amount.
        </Paragraph>
        <Image
          src={ImageSpaceRace1}
          alt="Prototype of the Space Race game launcher"
          loading="eager"
          className="mt-2"
        />
        <Image
          src={ImageSpaceRace2}
          alt="Prototype of the Space Race game counting down"
          className="mt-2"
        />
        <Image
          src={ImageSpaceRace3}
          alt="Prototype of the Space Race game approaching the finish line"
          className="mt-2"
        />
        <Image
          src={ImageSpaceRace4}
          alt="Prototype of the Space Race game displaying the reward amount"
          className="mt-2"
        />
      </section>
      <section className="mt-10">
        <SectionHeader as="h3">Scratch Off</SectionHeader>
        <Paragraph>
          Scratch Off is a straightforward lottery style scratch off card.
          Scratch the gray area to see what you’ve won. Why a chicken? Mostly
          because a former coworker is a proud father of half dozen hens who
          happen to lay the best breakfast eggs I’ve ever had.
        </Paragraph>
        <Image
          src={ImageScratchOff1}
          alt="Prototype of the Scratch Off game card before scratching"
          className="mt-2"
        />
        <Image
          src={ImageScratchOff2}
          alt="Prototype of the Scratch Off game card while it's being scratched off"
          className="mt-2"
        />
      </section>
      <section className="mt-10">
        <SectionHeader as="h3">PlinkGO!</SectionHeader>
        <Paragraph>
          There was a time when Price is Right was a part of my brother’s and my
          daily summer routine. Plinko was my favorite game on the show. Thus
          PlinkGO! was born. Click the GO! button and watch the chip fall. Your
          points reward appears when the chip lands in the reward zone.
        </Paragraph>
        <Image
          src={ImagePlinkGo1}
          alt="Prototype of the PlinkGO! game before dropping the chip"
          className="mt-2"
        />
        <Image
          src={ImagePlinkGo2}
          alt="Prototype of the PlinkGO! game during gameplay"
          className="mt-2"
        />
        <Image
          src={ImagePlinkGo3}
          alt="Prototype of the PlinkGO! game displaying the reward amount"
          className="mt-2"
        />
      </section>
    </>
  );
}
