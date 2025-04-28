import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import ImageIcon from '@mui/icons-material/Image'; // Example icon
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

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
    <Grid container justifyContent="center" alignItems="center">
      <Grid>
        <Grid container spacing={2} direction="column">
          <Grid item size={12}>
            <TextField
              label="Copper"
              id="copper"
              value={values.copper}
              onChange={(e) => handleChange(e, 'copper')}
              variant="outlined"
            />
          </Grid>
          <Grid item size={12}>
            <TextField
              label="Silver"
              id="silver"
              value={values.silver}
              onChange={(e) => handleChange(e, 'silver')}
              variant="outlined"
            />
          </Grid>
          <Grid item size={12}>
            <TextField
              label="Electrum"
              id="electrum"
              value={values.electrum}
              onChange={(e) => handleChange(e, 'electrum')}
              variant="outlined"
            />
          </Grid>
          <Grid item size={12}>
            <TextField
              label="Gold"
              id="gold"
              value={values.gold}
              onChange={(e) => handleChange(e, 'gold')}
              variant="outlined"
            />
          </Grid>
          <Grid item size={12}>
            <TextField
              label="Platinum"
              id="platinum"
              value={values.platinum}
              onChange={(e) => handleChange(e, 'platinum')}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
}

export default CurrencyConverter;
