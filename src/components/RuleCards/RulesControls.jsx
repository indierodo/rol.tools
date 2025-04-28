import PropTypes from "prop-types";

const RulesControls = ({ searchText, handleSearchChange, cardsPerPage, handleCardsPerPageChange }) => (
    <div className="controls">
        <input
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={handleSearchChange}
        />
        <select value={cardsPerPage} onChange={handleCardsPerPageChange}>
            <option value={2}>2 por página</option>
            <option value={4}>4 por página</option>
            <option value={6}>6 por página</option>
        </select>
    </div>
);

RulesControls.propTypes = {
    searchText: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    cardsPerPage: PropTypes.number.isRequired,
    handleCardsPerPageChange: PropTypes.func.isRequired
};

export default RulesControls;
