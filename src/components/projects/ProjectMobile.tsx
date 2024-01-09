import { ProjectType } from "@/components/projects/Project";

import Image from "next/image";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import clsx from "clsx";

interface ProjectProp {
  className?: string;
  project?: ProjectType;
}

export function ProjectMobile({ project, className }: ProjectProp) {
  return (
    <div className={clsx(className)}>
      <div className="w-full h-auto">
        <Image
          key={project!.name}
          src={project!.img}
          alt={project!.title}
          className="h-full w-full object-cover"
          quality={65}
          placeholder="blur"
          priority={true}
        />
      </div>
      <div className="relative">
        <h3 className="mt-4 text-center text-2xl">{project!.name}</h3>
        <p className="mt-3 leading-loose text-sm">{project!.description}</p>
        <div className="flex flex-col mt-2 font-bold">
          <div>Uses:</div>
          <ul>
            {project!.use.map((tech) => (
              <li
                key={tech}
                className="flex items-center space-x-2 leading-loose mt-1"
              >
                <IoCheckmarkDoneSharp />
                <span className="text-base">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-1 border-b border-slate-400 mt-4" />
    </div>
  );
}
