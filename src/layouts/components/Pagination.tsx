import Link from "next/link";
import React from "react";

const Pagination = ({
  section,
  currentPage,
  totalPages,
}: {
  section: string;
  currentPage: number;
  totalPages: number;
}) => {
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            {totalPages > 1 && (
              <nav
                className="mb-4 flex justify-center "
                aria-label="Pagination"
              >
                {/* previous */}
                {
                  <Link
                    href={
                      indexPageLink
                        ? `${section ? "/" + section : "/"}`
                        : `${section ? "/" + section : ""}/page/${
                            currentPage - 1
                          }`
                    }
                    className={` mr-2 rounded-lg px-4 py-3 text-primary hover:bg-primary hover:text-white ${
                      hasPrevPage ? "block" : "hidden"
                    }`}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="mt-1 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                }

                {/* page index */}
                {pageList.map((pagination, i) =>
                  pagination === currentPage ? (
                    <span
                      key={i}
                      aria-current="page"
                      className={` mr-2 rounded-lg bg-primary  px-6 py-3 text-white`}
                    >
                      {pagination}
                    </span>
                  ) : (
                    <Link
                      key={i}
                      href={
                        i === 0
                          ? `${section ? "/" + section : "/"}`
                          : `${section ? "/" + section : ""}/page/${pagination}`
                      }
                      aria-current="page"
                      className={` mr-2 rounded-lg px-6 py-3 text-primary hover:bg-primary hover:text-white`}
                    >
                      {pagination}
                    </Link>
                  )
                )}

                {/* next page */}
                {
                  <Link
                    href={`${section ? "/" + section : ""}/page/${
                      currentPage + 1
                    }`}
                    className={` mr-2 rounded-lg px-4 py-3 text-primary hover:bg-primary hover:text-white  ${
                      hasNextPage ? "block" : "hidden"
                    }`}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="mt-1 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                }
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
