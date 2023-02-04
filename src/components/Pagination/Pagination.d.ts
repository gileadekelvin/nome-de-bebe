export type PaginationProps = {
  page: number;
  total: number | null | undefined;
  totalPerPage: number;
  setPage: (page: number) => void;
};
