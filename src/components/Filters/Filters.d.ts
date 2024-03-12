export type FilterProps = {
  gender: string | null;
  setGender: (letter: string | null) => void;
  letter: string | null;
  setLetter: (letter: string | null) => void;
  setQuery: (query: string | null) => void;
};
