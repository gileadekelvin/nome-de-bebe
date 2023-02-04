import type { NameProps } from "./Name";
import Son from "./Son";

const formatter = Intl.NumberFormat("en", { notation: "compact" });
const MY_SONS = ["PEDRO", "JOAQUIM"];

const Name = (props: NameProps) => {
  const { name } = props;

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-6">
      <div className="flex flex-row">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name.name}
        </h5>
        {MY_SONS.includes(name.name) && <Son />}
      </div>

      <p className="mb-3 text-sm text-gray-700">
        <span className="font-bold">Variações: </span>
        {name.names
          .slice(1, -1)
          .split("|")
          .map((n) => {
            return (
              n.charAt(0).toLocaleUpperCase() + n.slice(1).toLocaleLowerCase()
            );
          })
          .join(", ")}
      </p>

      <div className="flex items-center justify-between">
        <div>
          <span className="mb-3 text-sm text-gray-700">
            {formatter.format(name.frequency_total)} de pessoas
          </span>
        </div>
        <a
          href={`https://www.dicionariodenomesproprios.com.br/${name.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600focus:outline-none inline-flex items-center rounded-lg border-gray-600 px-3 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-gray-300"
        >
          ver significado
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Name;
