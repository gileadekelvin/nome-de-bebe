import type { NamesProps } from "./Names";
import { api } from "../../utils/api";
import Loading from "../Loading";

const Names = (props: NamesProps) => {
  const { gender, letter } = props;

  const namesQuery = api.names.getNames.useQuery({
    firstLetter: letter !== "Qualquer letra" ? letter : null,
    gender,
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

export default Names;
