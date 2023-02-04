import { useState } from "react";

import AlphabetFilter from "./AlphabetFilter";
import GenderFilter from "./GenderFilter";

const Filters = () => {
  const [gender, setGender] = useState<string | null>(null);
  const [letter, setLetter] = useState<string | null>("Qualquer letra");

  return (
    <div className="flex items-center justify-center bg-gray-50 px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 h-[320px] w-[320px] animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-2000 absolute top-0 -right-4 h-[320px] w-[320px] animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-4000 absolute -bottom-8 left-20 h-[320px] w-[320px] animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="relative m-8 space-y-4">
          <div className="flex min-w-[320px] flex-col gap-6 rounded-lg border border-gray-600 bg-white p-7">
            <GenderFilter gender={gender} setGender={setGender} />
            <AlphabetFilter letter={letter} setLetter={setLetter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
