import { useState, useEffect, useMemo } from 'react';

const useRulesPagination = (activeStep, data, types) => {
    const [searchText, setSearchText] = useState('');
    const [cardsPerPage, setCardsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const ruleCards = useMemo(() => {
        return data.filter(i => i.type.includes(types[activeStep]));
    }, [activeStep, data, types]);

    const filteredRules = useMemo(() => {
        return ruleCards.filter(rule =>
            rule.title.toLowerCase().includes(searchText.toLowerCase()) ||
            rule.description.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [ruleCards, searchText]);

    const totalPages = useMemo(() => {
        return Math.ceil(filteredRules.length / cardsPerPage) || 1;
    }, [filteredRules.length, cardsPerPage]);

    const currentCards = useMemo(() => {
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        return filteredRules.slice(indexOfFirstCard, indexOfLastCard);
    }, [filteredRules, currentPage, cardsPerPage]);

    // Cuando activeStep cambia, o searchText cambia -> resetea página a 1
    useEffect(() => {
        setCurrentPage(1);
    }, [activeStep, searchText, cardsPerPage]);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const goToPage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) setCurrentPage(pageNum);
    };

    const handleCardsPerPageChange = (e) => {
        setCardsPerPage(Number(e.target.value));
        // No sets currentPage aquí, lo hace el useEffect de arriba
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        // No sets currentPage aquí, lo hace el useEffect de arriba
    };

    return {
        currentCards,
        currentPage,
        totalPages,
        cardsPerPage,
        searchText,
        goToNextPage,
        goToPrevPage,
        goToPage,
        handleCardsPerPageChange,
        handleSearchChange,
    };
};

export default useRulesPagination;
