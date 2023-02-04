import clsx from "clsx";

import type { GenderFilterProps } from "./GenderFilter";

const GenderFilter = (props: GenderFilterProps) => {
  const { gender, setGender } = props;

  return (
    <div className="flex flex-col gap-2">
      <span>Filtrar por</span>
      <div className="flex gap-4">
        <button
          onClick={() => setGender("M")}
          className={clsx(
            "rounded-md px-3.5 py-1.5 text-base font-semibold leading-7",
            "border border-indigo-600 shadow-sm",
            "hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            gender === "M" ? "bg-indigo-600 text-white" : "text-indigo-600"
          )}
        >
          Menino
        </button>
        <button
          onClick={() => setGender("F")}
          className={clsx(
            "rounded-md border border-pink-600 px-3.5 py-1.5 text-base font-semibold leading-7",
            "border border-indigo-600 shadow-sm",
            "hover:bg-pink-500 hover:text-white focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-offset-2 focus-visible:outline-pink-600",
            gender === "F" ? "bg-pink-600 text-white" : "text-pink-600"
          )}
        >
          Menina
        </button>
        <button
          onClick={() => setGender(null)}
          className={clsx(
            "rounded-md px-3.5 py-1.5 text-base font-semibold leading-7",
            "border border-gray-600 shadow-sm",
            "hover:bg-gray-500 hover:text-white focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-offset-2 focus-visible:outline-gray-600",
            gender === null ? "bg-gray-600 text-white" : "text-gray-600"
          )}
        >
          Todos
        </button>
      </div>
    </div>
  );
};

export default GenderFilter;
