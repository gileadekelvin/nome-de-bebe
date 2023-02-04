import { useEffect, useState } from "react";

import type { NamesProps } from "./Names";
import { api } from "../../utils/api";
import Pagination from "../Pagination";
import NamesList from "./NamesList";

const RESULTS_PER_PAGE = 20;

const Names = (props: NamesProps) => {
  const { gender, letter } = props;

  const [page, setPage] = useState(0);

  const totalCount = api.names.getTotal.useQuery({
    firstLetter: letter !== "Qualquer letra" ? letter : null,
    gender,
  });

  useEffect(() => {
    setPage(0);
  }, [gender, letter]);

  return (
    <>
      <Pagination
        page={page}
        setPage={setPage}
        total={totalCount.data}
        totalPerPage={RESULTS_PER_PAGE}
      />
      <NamesList
        gender={gender}
        letter={letter}
        page={page}
        resultsPerPage={RESULTS_PER_PAGE}
      />
    </>
  );
};

export default Names;
