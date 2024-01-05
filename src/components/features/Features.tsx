import { Container } from "@/components/shared/Container";
import { BiCheckShield } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import React from "react";
import clsx from "clsx";
import { lato } from "@/app/font";
import { Dot } from "@/components/shared/Dot";
import ReactPlayer from "react-player";
import { VideoPlayer } from "@/components/features/VideoPlayer";

interface FeatProps {
  feat: {
    icon: React.ReactNode;
    feature: string;
    featDescription: string;
    color: string;
  };
}

function Feat({ feat: { icon, featDescription, feature, color } }: FeatProps) {
  return (
    <li className="group flex space-x-4">
      <div
        className={clsx(
          "relative bg-white lg:text-2xl p-4 self-start rounded-full shadow-blue-50 shadow-2xl flex justify-center items-center",
          color,
        )}
      >
        {icon}
        <div className="absolute border-l border-black border-dashed -bottom-[120%] left-1/2 z-10 h-full group-last:border-none" />
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-2xl font-bold">{feature}</span>
        <span>{featDescription}</span>
      </div>
    </li>
  );
}

function ListFeat() {
  const features = [
    {
      icon: <BiCheckShield />,
      feature: "Reliabilities",
      featDescription: "Consistent dependability in project management.",
      color: "text-[#779ecc]",
    },
    {
      icon: <FaRegHandshake />,
      feature: "Integrity",
      featDescription: "Strong moral and ethical principles in the profession.",
      color: "text-[#f28444]",
    },
    {
      icon: <GiProgression />,
      feature: "Competence",
      featDescription: "Proficiency and effectiveness in project tasks.",
      color: "text-[#bf4136]",
    },
  ];

  return (
    <ul className="lg:max-w-80 flex flex-col space-y-12 shrink-0">
      {features.map((feat) => (
        <Feat key={feat.feature} feat={feat} />
      ))}
    </ul>
  );
}

export function Features({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <Container className={className} id={id}>
      <div className="flex justify-between mb-10">
        <h1
          className={clsx(
            "text-4xl leading-[1.25] tracking-wider max-w-144",
            lato.className,
          )}
        >
          Elevate Your Projects
          <br />
          with
          <br />
          Precision Tracking
          <Dot color="text-secondary" />
        </h1>
        <div className="relative lg:w-[550px] text-lg h-20  mr-16">
          <p>
            Welcome to Project Management Tracking.
            <br />
            Join us in mastering streamlined progress!
          </p>
          <div className="absolute w-full h-[140%] bg-secondary -bottom-[150%] right-0 flex justify-around items-center">
            <div className="ml-4 flex space-x-1 justify-center items-center">
              <div className="text-6xl">20</div>
              <div className="flex flex-col -space-y-1">
                <span>Successful</span>
                <span>Projects</span>
              </div>
            </div>
            <div className="h-1/2 my-auto border-l border-black" />
            <div className="mr-4 flex space-x-2 justify-center items-center">
              <div className="text-6xl">22</div>
              <div className="flex flex-col -space-y-1">
                <span>Satisfied</span>
                <span>Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 items-end justify-between">
        <ListFeat />
        <div className="h-112 rounded-2xl overflow-hidden">
          <VideoPlayer />
        </div>
      </div>
    </Container>
  );
}
