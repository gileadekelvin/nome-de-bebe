import type { FilterProps } from "./Filters";
import AlphabetFilter from "./AlphabetFilter";
import GenderFilter from "./GenderFilter";
import SearchFilter from "./SearchFilter";

const Filters = (props: FilterProps) => {
  const { gender, setGender, letter, setLetter, setQuery } = props;

  return (
    <div className="flex items-center justify-center bg-gray-50 md:px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 h-[240px] w-[240px] animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter md:-left-4 md:h-[320px] md:w-[320px]"></div>
        <div className="animation-delay-2000 absolute top-0 h-[240px] w-[240px] animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter md:-right-4 md:h-[320px] md:w-[320px]"></div>
        <div className="animation-delay-4000 absolute -bottom-8 h-[240px] w-[240px] animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter md:left-20 md:h-[320px] md:w-[320px]"></div>
        <div className="relative m-4 space-y-4 md:m-8">
          <div className="flex min-w-[320px] flex-col gap-6 rounded-lg border border-gray-600 bg-white p-7">
            <GenderFilter gender={gender} setGender={setGender} />
            <AlphabetFilter letter={letter} setLetter={setLetter} />
            <SearchFilter setQuery={setQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
