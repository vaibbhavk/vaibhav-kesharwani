import cn from "classnames";
import Image from "next/image";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function ProjectCard({
  name,
  desc,
  logo,
  url,
  github,
  tech,
  gradient,
}) {
  return (
    <div className={cn("", "rounded-xl w-full bg-gradient-to-r p-1", gradient)}>
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center overflow-hidden h-full bg-white dark:bg-gray-900 rounded-lg">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-[300px] md:h-[400px] md:w-[400px] shrink-0 relative sm:mb-0 mr-auto md:hover:opacity-100 opacity-10 transform hover:scale-[1.05] transition-all"
        >
          <Image alt={name} fill src={logo} sizes={30} priority />
        </a>
        <div className="flex flex-col md:items-end items-start text-gray-800 dark:text-gray-200 p-5 absolute md:relative md:text-right text-left">
          <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-6 text-black dark:text-white truncate">
            {name}
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400 w-[250px] sm:w-full">
            {desc}
          </p>
          <ul className="flex flex-wrap mb-4 grow">
            {tech.map((t, index) => (
              <li
                key={index}
                className="mr-6 md:ml-6 md:mr-0 text-sm text-gray-400"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-6 md:mr-0"
              >
                <FaCode
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                  size="1.5em"
                  color="#181717"
                />
              </a>
            )}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="md:ml-6"
              >
                <FaExternalLinkAlt
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                  size="1.5em"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
