import Link from "next/link";
import { MdLocationPin } from "react-icons/md";

export default function ExperienceCard({
  name,
  company,
  type,
  location,
  done,
  date,
  tech,
}) {
  return (
    <div className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900">
      <h3 className="text-lg font-bold text-left mb-1 text-gray-900 dark:text-gray-100">
        {name}
      </h3>
      <div className="flex items-center mb-2">
        <p className="text-sm text-gray-900 dark:text-gray-100">{company}</p>
        &nbsp;{`(`}
        <p className="text-sm text-gray-900 dark:text-gray-100">{type}</p>
        {`)`}
      </div>

      <div className="flex items-center mb-2">
        <MdLocationPin size="1em" />
        <p className="ml-1 text-gray-600 dark:text-gray-400 text-sm">
          {location}
        </p>
      </div>

      <ul className="mb-2">
        {done &&
          done.map((d, index) => (
            <li
              key={index}
              className="text-md text-gray-600 dark:text-gray-400 leading-7 hover:text-gray-80 dark:hover:gray-200 transition-all"
            >
              &minus;&nbsp;{d}
            </li>
          ))}
      </ul>

      <ul className="flex flex-wrap mb-2 grow">
        <li className="text-sm font-semibold mr-3">Skills:</li>
        {tech.map((t, index) => (
          <li key={index} className="mr-3 text-sm rounded-lg text-gray-400">
            {t}
          </li>
        ))}
      </ul>

      <p className="text-sm text-right text-gray-900 dark:text-gray-100">
        {date}
      </p>
    </div>
  );
}
