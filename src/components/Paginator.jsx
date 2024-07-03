import { useState, useEffect } from "react";

const Paginator = ({page, perPage, setPage, total}) => {
  
  const [pages, setPages] = useState(0);

  const nextPage = () => {
    if (page !== pages) {
      let nextPage = page + 1;
      setPage(nextPage);
    } 
  }

  const prevPage = () => {
    if (page !== 1) {
      let prevPage = page - 1;
      setPage(prevPage);
    }
  }

  const renderLi = () => {
    let li = [];
    for (let i = 1; i <= pages; i++) {
      li.push(
        <li key={i}>
          <a
            href="#"
            className={`flex items-center justify-center px-3 h-9 leading-tight 
            ${i === page ? 
            `bg-gray-600 border border-gray-500 text-gray-200 
            hover:bg-gray-500 hover:text-blue-700`
              :
              `bg-gray-800 border border-gray-700 text-gray-400 
            hover:bg-gray-700 hover:text-white`
            }
            `}
            onClick={() => setPage(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    return li;
  };

  useEffect(() => {
    if (total && total > 0) {
      let calc = parseInt(total / perPage) + 1;
      setPages(calc);
    }
  }, [total])

  if (pages === 0) {
    return null;
  }

  return (
    <>
      <nav className="mx-auto pt-6">
        <ul className="inline-flex -space-x-px text-md">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-9 ms-0 leading-tight 
              bg-gray-800 border border-gray-700 text-gray-400 
              hover:bg-gray-700 hover:text-white"
              onClick={() => prevPage()}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          {renderLi()}
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-9 leading-tight 
              bg-gray-800 border border-gray-700 text-gray-400 
              hover:bg-gray-700 hover:text-white"
              onClick={() => nextPage()}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Paginator;
