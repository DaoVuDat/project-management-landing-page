import { Container } from "@/components/shared/Container";
import { BiCheckShield } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import React from "react";
import clsx from "clsx";

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
    <ul className="lg:max-w-96 flex flex-col space-y-12">
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
      <ListFeat />
    </Container>
  );
}
