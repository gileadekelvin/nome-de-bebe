import { api } from "../../../utils/api";
import Loading from "../../Loading";
import type { NamesListProps } from "./NamesList";

const NamesList = (props: NamesListProps) => {
  const { gender, letter, page, resultsPerPage } = props;

  const namesQuery = api.names.getNames.useQuery({
    firstLetter: letter !== "Qualquer letra" ? letter : null,
    gender,
    page,
    size: resultsPerPage,
  });

  if (!namesQuery.data) return <Loading />;

  return (
    <>
      {namesQuery.data?.map((name) => {
        return <div key={name.id}>{name.name}</div>;
      })}
    </>
  );
};

export default NamesList;
