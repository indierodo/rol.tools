import PropTypes from 'prop-types';
import CardBg from '../../img/Card.png';
import CardHeaderBg from '../../img/CardHeader.png';
import CardBodyBg from '../../img/CardBody.png';
import './MedievalCard.scss';

const MedievalCard = ({ children }) => {
    return (
        <div className="card">
            <img src={CardBg} alt="Fondo del Card" className="card-background" />
            {children}
        </div>
    );
};

const MedievalCardIcon = ({ children }) => {
    return (
        <div className="card-icon-section">
            <img src={CardHeaderBg} alt="Fondo de Icono" className="card-icon-background" />
            {children}
        </div>
    );
};

const MedievalCardHeader = ({ children }) => {
    return (
        <div className="card-header">
            {children}
        </div>
    );
};

const MedievalCardBody = ({ children }) => {
    return (
        <div className="card-body">
            <img src={CardBodyBg} alt="Fondo Body" className="card-body-background" />
            <div className="card-body-text">
                {children}
            </div>
        </div>
    );
};

const MedievalCardFooter = ({ children }) => {
    return (
        <div className="card-footer">
            {children}
        </div>
    );
};

MedievalCard.propTypes = {
    children: PropTypes.node.isRequired,
};

MedievalCardIcon.propTypes = {
    children: PropTypes.node.isRequired,
};

MedievalCardHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

MedievalCardBody.propTypes = {
    children: PropTypes.node.isRequired,
};

MedievalCardFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

// Exportamos todos juntos
MedievalCard.Icon = MedievalCardIcon;
MedievalCard.Header = MedievalCardHeader;
MedievalCard.Body = MedievalCardBody;
MedievalCard.Footer = MedievalCardFooter;

export default MedievalCard;