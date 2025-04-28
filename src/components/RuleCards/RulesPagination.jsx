import PropTypes from "prop-types";

const RulesPagination = ({ currentPage, totalPages, goToPrevPage, goToNextPage, goToPage }) => (
    <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Anterior</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Siguiente</button>
        <input
            type="number"
            min="1"
            max={totalPages}
            placeholder="Ir a..."
            onKeyDown={(e) => {
                if (e.key === 'Enter') goToPage(Number(e.target.value));
            }}
        />
    </div>
);

RulesPagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    goToPrevPage: PropTypes.func.isRequired,
    goToNextPage: PropTypes.func.isRequired,
    goToPage: PropTypes.func.isRequired
};


export default RulesPagination;
