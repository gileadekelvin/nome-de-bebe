import clsx from "clsx";

import { alphabet } from "./alphabet";
import type { AlphabetFilterProps } from "./AlphabetFilter";

const AlphabetFilter = (props: AlphabetFilterProps) => {
  const { letter: selectedLetter, setLetter } = props;

  return (
    <div className="flex flex-col gap-2">
      <span>Começando com a letra</span>
      <div className="flex flex-row flex-wrap gap-2">
        {alphabet.map((letter) => {
          return (
            <button
              className={clsx(
                "rounded-md px-3 py-2 hover:bg-gray-500 hover:text-white",
                letter === selectedLetter
                  ? " bg-gray-600 text-white"
                  : "text-black"
              )}
              key={letter}
              onClick={() => setLetter(letter)}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AlphabetFilter;
