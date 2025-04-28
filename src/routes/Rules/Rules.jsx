import { useState } from 'react';

import HorizontalNonLinearStepper from '../../components/Stepper';
import useRulesPagination from '../../hooks/useRulesPagination';
import useBackgroundImage from '../../hooks/UseBackground';
import RulesControls from '../../components/RuleCards/RulesControls';
import RulesPagination from '../../components/RuleCards/RulesPagination';
import MedievalCard from '../../components/MedievalCard/MedievalCard';
import DiceIcon from '../../img/icono-d20.png';
import HsIcon from '../../img/icono-HS.png'
import HbIcon from '../../img/icono-homebrew.png'
import Bg from '../../img/InkForest.png';
import rules from './rules';
import './Rules.scss';

const Rules = () => {
    useBackgroundImage(Bg);
    const [activeStep, setActiveStep] = useState(0);
    const types = ['mechanic', 'coexistence', 'homebrew'];
    const steps = ['Mecánicas', 'Convivencia', 'Homebrew'];

    const {
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
    } = useRulesPagination(activeStep, rules, types);

    const getIcon = (type) => {
        switch(type){
            case 'coexistence_rules': return HsIcon
            case 'homebrew_rules': return HbIcon
            default : return DiceIcon
        }
    } 

    return (
        <div>
            <HorizontalNonLinearStepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep}/>
            <div className="cards-container">
                <RulesControls
                    searchText={searchText}
                    handleSearchChange={handleSearchChange}
                    cardsPerPage={cardsPerPage}
                    handleCardsPerPageChange={handleCardsPerPageChange}
                />
                <div className="cards-grid">
                    {currentCards.map(i => (
                        <MedievalCard key={i.title}>
                            <MedievalCard.Icon style={{ filter: 'invert(1)' }}>
                                <img src={getIcon(i.type)} alt="Icono" className="card-icon" />
                            </MedievalCard.Icon>
                            <MedievalCard.Header>{i.title}</MedievalCard.Header>
                            <MedievalCard.Body>
                                <p>{i.description}</p>
                            </MedievalCard.Body>
                            <MedievalCard.Footer>{i.footer}</MedievalCard.Footer>
                        </MedievalCard>
                    ))}
                </div>
                <RulesPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    goToPrevPage={goToPrevPage}
                    goToNextPage={goToNextPage}
                    goToPage={goToPage}
                />
            </div>
        </div>
    );
};

export default Rules;
