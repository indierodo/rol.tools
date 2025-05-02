import { styled } from "@mui/material/styles";
import {Button, Radio, Box, Select, TextField} from "@mui/material";

const CustomButton = styled(Button)(() => ({
    background: '#9c6fba',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '12px',
    padding: '0.7rem 1.5rem',
    border: '2px solid #7a4e99',
    fontFamily: "'Oldenburg', serif",
    boxShadow: `
        inset -2px -2px 2px rgba(255, 255, 255, 0.6),
        inset 2px 2px 4px rgba(0, 0, 0, 0.3),
        3px 3px 6px rgba(0, 0, 0, 0.3)
    `,
    transition: '0.2s',
    '&:hover': {
        background: '#7e56a0',
    },
}));

const CustomRadio = styled(Radio)(() => ({
    color: '#38316b',
    '&.Mui-checked': {
        color: '#8163a6',
    },
}));

const CustomHeader = styled(Box)(() => ({
    background: 'linear-gradient(to right, #a685c2, #7d5fa3)',
    borderTopLeftRadius: '2rem',
    borderTopRightRadius: '2rem',
    padding: '1rem',
    margin: '-2rem -2rem 1.5rem -2rem',
    boxShadow: 'inset 0 -4px 8px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    color: '#3b204e',
    fontWeight: 'bold',
    fontSize: '1.8rem',
}));

const CustomSelect = styled(Select)(() => ({
    backgroundColor: '#e9d4f0',
    borderRadius: '8px',
}));

const CustomTextField = styled(TextField)(() => ({
    '& .MuiFilledInput-root': {
        backgroundColor: '#e9d4f0',
        borderRadius: '8px',
    }
}));

const CustomCard = styled(Box)(() => ({
    background: 'linear-gradient(145deg, #e4d0ec, #c9a7dc)',
    borderRadius: '24px',
    padding: '2rem',
    width: '400px',
    margin: '2rem auto',
    boxShadow: `
        inset -4px -4px 6px #fff,
        inset 4px 4px 6px rgba(0, 0, 0, 0.2),
        4px 4px 10px rgba(0, 0, 0, 0.4)
    `,
    position: 'relative',
    fontFamily: "'Georgia', serif",
    border: '4px solid #6b4b89',
}));



export {CustomButton, CustomHeader, CustomRadio, CustomSelect, CustomTextField, CustomCard};
