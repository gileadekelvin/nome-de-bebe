import type { Gender } from "@prisma/client";

export type GenderFilterProps = {
  gender: Gender | null;
  setGender: (gender: Gender | null) => void;
};
