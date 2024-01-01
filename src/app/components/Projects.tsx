"use client";
import { Container } from "@/app/components/Container";
import clsx from "clsx";
import { lato } from "@/app/font";
import { Dot } from "@/app/components/Dot";
import { useState } from "react";

interface Project {
  name: string;
  description: string;
}

const projectsData: Project[] = [
  {
    name: "Project A",
    description: "Description project A",
  },
  {
    name: "Project B",
    description: "Description project B",
  },
  {
    name: "Project C",
    description: "Description project C",
  },
  {
    name: "Project D",
    description: "Description project D",
  },
  {
    name: "Project E",
    description: "Description project E",
  },
];

export function Projects({ id }: { id?: string }) {
  const [selectedId, setSelectedId] = useState(0);

  const highlight = " text-black drop-shadow-md ";
  const notHighlight = " group text-slate-700 ";

  return (
    <Container id={id} className="mt-24">
      <h1
        className={clsx(
          "text-center text-5xl tracking-wider py-8",
          lato.className,
        )}
      >
        Top projects
        <Dot color="text-secondary" />
      </h1>
      <div className="mt-4">
        <ul className="flex justify-center space-x-16">
          {projectsData.map((project, index) => (
            <li
              onClick={() => setSelectedId(index)}
              key={project.name}
              className={clsx(
                selectedId == index && highlight,
                selectedId != index && notHighlight,
                " cursor-pointer transition duration-300 relative pb-1",
              )}
            >
              {project.name}
              <span
                className={clsx(
                  "transition-all duration-300 opacity-0  w-full absolute h-0.5 bg-slate-500 left-0",
                  selectedId == index && " opacity-100 bottom-0 ",
                  selectedId != index &&
                    " -bottom-1 group-hover:-bottom-0 group-hover:opacity-100",
                )}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen"></div>
    </Container>
  );
}
