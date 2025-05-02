import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Typography
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    CustomCard,
    CustomHeader,
    CustomButton,
    CustomRadio,
    CustomSelect,
    CustomTextField
} from '../CustomElements/DnDCard'
// import styles from "./DnDCardForm.module.scss";

const theme = createTheme({
    typography: {
        fontFamily: "'Lato', 'Georgia', serif",
    },
});

export default function DnDCardStyled() {
    return (
        <ThemeProvider theme={theme}>
            <CustomCard>
                <CustomHeader>
                    <Typography variant="h4">Tirar dados!</Typography>
                </CustomHeader>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <CustomTextField
                        label="Mínimo a superar"
                        variant="filled"
                        type="number"
                        fullWidth
                    />
                    <CustomTextField
                        label="Número de dados"
                        variant="filled"
                        type="number"
                        fullWidth
                    />
                    <FormControl fullWidth variant="filled">
                        <InputLabel>Número de caras</InputLabel>
                        <CustomSelect defaultValue="d20">
                            <MenuItem value="d4">d4</MenuItem>
                            <MenuItem value="d6">d6</MenuItem>
                            <MenuItem value="d8">d8</MenuItem>
                            <MenuItem value="d10">d10</MenuItem>
                            <MenuItem value="d12">d12</MenuItem>
                            <MenuItem value="d20">d20</MenuItem>
                        </CustomSelect>
                    </FormControl>
                    <RadioGroup row defaultValue="natural">
                        <FormControlLabel value="natural" control={<CustomRadio />} label="Natural" />
                        <FormControlLabel value="ventaja" control={<CustomRadio />} label="Ventaja" />
                        <FormControlLabel value="desventaja" control={<CustomRadio />} label="Desventaja" />
                    </RadioGroup>
                    <CustomButton>Tirar</CustomButton>
                </Box>
            </CustomCard>
        </ThemeProvider>
    );
}
