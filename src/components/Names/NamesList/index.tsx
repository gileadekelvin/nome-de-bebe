import { api } from "../../../utils/api";
import Loading from "../../Loading";
import Name from "../Name";
import type { NamesListProps } from "./NamesList";

const NamesList = (props: NamesListProps) => {
  const { gender, letter, query, page, resultsPerPage } = props;

  const namesQuery = api.names.getNames.useQuery({
    firstLetter: letter !== "Qualquer letra" ? letter : null,
    gender,
    query,
    page,
    size: resultsPerPage,
  });

  if (!namesQuery.data) return <Loading />;

  return (
    <div className="flex flex-col gap-4 mb-8">
      {namesQuery.data?.map((name) => {
        return <Name key={name.id} name={name} />;
      })}
    </div>
  );
};

export default NamesList;
