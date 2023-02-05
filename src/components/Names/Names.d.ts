import type { Gender } from "@prisma/client";

export type NamesProps = {
  gender: Gender | null;
  letter: string | null;
  query: string | null;
};
