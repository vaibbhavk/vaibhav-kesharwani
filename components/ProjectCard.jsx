import cn from "classnames";
import Image from "next/image";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

import { BsFiletypeDocx } from "react-icons/bs";

export default function ProjectCard({
  name,
  desc,
  logo,
  url,
  github_url,
  doc_url,
  tech,
  gradient,
}) {
  return (
    <div className={cn("", "rounded-lg bg-gradient-to-r p-1", gradient)}>
      <div className="w-full h-full bg-white rounded-lg p-2">
        <div className="relative w-full h-[230px] hidden sm:block">
          <Image
            src={logo}
            alt={name}
            fill
            sizes={30}
            className="object-contain rounded-lg"
            priority
          />
        </div>

        <div className="mt-4">
          <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-6 bg-gradient-to-r from-[#000000] via-[#888888] to-[#000000] bg-clip-text text-transparent truncate">
            {name}
          </h3>
          <p className="mt-2 text-secondary whitespace-pre-line text-gray-600 dark:text-gray-400">
            {desc}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {github_url && (
            <a href={github_url} target="_blank" rel="noopener noreferrer">
              <FaCode
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                size="1.5em"
                color="#181717"
              />
            </a>
          )}

          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                size="1.5em"
              />
            </a>
          )}

          {doc_url && (
            <a href={doc_url} target="_blank" rel="noopener noreferrer">
              <BsFiletypeDocx
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                size="1.5em"
              />
            </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, index) => (
            <p key={index} className="text-[14px]">
              #{t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
