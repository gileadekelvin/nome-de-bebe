import type { PaginationProps } from "./Pagination";

const Pagination = (props: PaginationProps) => {
  const { page, setPage, total, totalPerPage } = props;

  return (
    <div className="mt-8 flex items-center justify-between py-3">
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando&nbsp;de&nbsp;
            <span className="font-medium">{page * totalPerPage + 1}</span>
            &nbsp;a&nbsp;
            <span className="font-medium">{(page + 1) * totalPerPage}</span>
            &nbsp;de&nbsp;
            <span className="font-medium">{total}</span>
            &nbsp;resultados
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              className="relative inline-flex cursor-pointer items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              onClick={() => setPage(Math.max(0, page - 1))}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Anterior</span>
            </a>
            <a
              onClick={() =>
                setPage(Math.min((total ?? 0) / totalPerPage, page + 1))
              }
              className="relative inline-flex cursor-pointer items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span>Próxima</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;