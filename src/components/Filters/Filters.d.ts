import type { Gender } from "@prisma/client";

export type FilterProps = {
  gender: Gender | null;
  setGender: (letter: Gender | null) => void;
  letter: string | null;
  setLetter: (letter: string | null) => void;
};
