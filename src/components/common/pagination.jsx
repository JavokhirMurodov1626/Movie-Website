import React from "react";
import _ from "lodash";

const Pagination = ({ moviesCount, dataCount, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(moviesCount / dataCount);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a className="page-link">{page}</a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
