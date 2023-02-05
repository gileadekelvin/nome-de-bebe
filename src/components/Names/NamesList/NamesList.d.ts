import type { Gender } from "@prisma/client";

export type NamesListProps = {
  gender: Gender | null;
  letter: string | null;
  query: string | null;
  page: number;
  resultsPerPage: number;
};
