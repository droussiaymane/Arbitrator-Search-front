import React from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const changePage = ({ selected }) => {
    pageNumbers(selected);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              style={{ backgroundColor: "skyblue" }}
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

// <div className="text-primary mb-3">
//   <Pagination
//     postsPerPage={visible}
//     totalPosts={userinfo.length}
//     paginate={paginate}
//   />
// </div>;
