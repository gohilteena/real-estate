import { useProperties } from "../context/PropertyContext";

const Pagination = () => {
  const {currentPage,setCurrentPage,totalPages,} = useProperties();

  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav className="property-pagination">
      <ul className="pagination justify-content-center">

       <li className="page-item">
  <button
    className="page-link"
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Previous
  </button>
</li>
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${
              currentPage === page ? "active" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}

       <li className="page-item">
  <button
    className="page-link"
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Next
  </button>
</li>
      </ul>
    </nav>
  );
};

export default Pagination;