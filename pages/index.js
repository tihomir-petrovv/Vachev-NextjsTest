import {
  SignOutButton ,
} from "@clerk/nextjs";
import { Hero } from "../sections";
import { Main } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  title: "Managed agency selection",
  description: "Stenghthen your onboarding process",
  image: { src: "/img/video.png", alt: "video", width: 1000, height: 1680 },
  quotes: [
    { title: "Brief", desc: "Complete brief writing or simple guidance on what to include, we've got you covered." },
    { title: "Search", desc: "In-depth agency search covering, criteria matching, door knocking and due-diligence vetting." },
    { title: "Pitch", desc: "Comprehensive pitch management, including comms, diary management and pitch hosting." },
  ],
  briefImage: { src: "/img/brief.png", alt: "brief", width: 1000, height: 1680 },
  searchImage: { src: "/img/search.png", alt: "search", width: 1000, height: 1680 },
  pitchImage: { src: "/img/pitch.png", alt: "pitch", width: 1000, height: 1680 },
};

export default function Home() {
  return (
    <>
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <div>
        <SignOutButton></SignOutButton>
        <Hero {...heroProps} />
        <Main {...mainProps}/>
      </div>
    </>
  );
}
