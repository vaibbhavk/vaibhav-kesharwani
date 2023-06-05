import { MdLocationPin } from "react-icons/md";

export default function EducationCard({ name, college, location, date }) {
  return (
    <div className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900">
      <p className="text-lg font-bold text-left mb-2 text-gray-900 dark:text-gray-100">
        {name}
      </p>
      <p className="text-md text-left mb-2 text-gray-900 dark:text-gray-100">
        {college}
      </p>
      <div className="flex items-center mb-2">
        <MdLocationPin size="1em" className="text-gray-600 dark:text-gray-400"/>
        <p className="ml-1 text-gray-600 dark:text-gray-400 text-sm">
          {location}
        </p>
      </div>
      <p className="text-sm text-right text-gray-900 dark:text-gray-100">
        {date}
      </p>
    </div>
  );
}
