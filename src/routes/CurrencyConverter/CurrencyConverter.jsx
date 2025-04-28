import { useState } from 'react';

const CurrencyConverter = () => {
    const [values, setValues] = useState({
        copper: 100,
        silver: 10,
        electrum: 2,
        gold: 1,
        platinum: 0.10
});

    const convertCurrency = (currency, value) => {
        switch(currency) {
            case 'copper':
                return {
                    silver: (value / 10).toFixed(2),
                    electrum: (value / 50).toFixed(2),
                    gold: (value / 100).toFixed(2),
                    platinum: (value / 1000).toFixed(2)
                };
            case 'silver':
                return {
                    copper: (value * 10).toFixed(2),
                    electrum: (value / 5).toFixed(2),
                    gold: (value / 10).toFixed(2),
                    platinum: (value / 100).toFixed(2)
                };
            case 'electrum':
                return {
                    copper: (value * 50).toFixed(2),
                    silver: (value * 5).toFixed(2),
                    gold: (value * 2).toFixed(2),
                    platinum: (value / 5).toFixed(2)
                };
            case 'gold':
                return {
                    copper: (value * 100).toFixed(2),
                    silver: (value * 10).toFixed(2),
                    electrum: (value / 2).toFixed(2),
                    platinum: (value / 10).toFixed(2)
                };
            case 'platinum':
                return {
                    copper: (value * 1000).toFixed(2),
                    silver: (value * 100).toFixed(2),
                    electrum: (value * 5).toFixed(2),
                    gold: (value * 10).toFixed(2)
                };
            default:
                return {}
        }
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        const updatedValues = {
              ...convertCurrency(id, parseFloat(value)),
              [id]: value
        };
        setValues(updatedValues);
    };

    return (
        <div>
            <label htmlFor="copper">Copper:</label>
            <input type="text" id="copper" value={values.copper} onChange={handleChange} />

            <label htmlFor="silver">Silver:</label>
            <input type="text" id="silver" value={values.silver} onChange={handleChange} />

            <label htmlFor="electrum">Electrum:</label>
            <input type="text" id="electrum" value={values.electrum} onChange={handleChange} />

            <label htmlFor="gold">Gold:</label>
            <input type="text" id="gold" value={values.gold} onChange={handleChange} />

            <label htmlFor="platinum">Platinum:</label>
            <input type="text" id="platinum" value={values.platinum} onChange={handleChange} />
        </div>
    );
}

export default CurrencyConverter;
