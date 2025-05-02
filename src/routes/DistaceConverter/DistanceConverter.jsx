import { useState, useEffect } from 'react';
import {
    TextField,
    Select,
    MenuItem,
    Typography,
    Grid,
    Divider,
    Box,
    InputLabel,
    FormControl,
    Card,
    ThemeProvider
} from '@mui/material';
import theme from './Theme';

const unitConversions = {
    metros: 1,
    centimetros: 100,
    pulgadas: 39.3701,
    pies: 3.28084,
    yardas: 1.09361,
    kilometros: 0.001,
    millas: 0.000621371
};

const timeConversions = {
    segundos: 1,
    minutos: 60,
    horas: 3600,
    dias: 86400
};

const DistanceConverter = () => {
    const [distances, setDistances] = useState({
        metros: 1,
        centimetros: 100,
        pulgadas: 39.3701,
        pies: 3.28084,
        yardas: 1.09361,
        kilometros: 0.001,
        millas: 0.000621371
    });

    const [travelDistance, setTravelDistance] = useState(100);
    const [travelUnit, setTravelUnit] = useState('metros');
    const [speedDistance, setSpeedDistance] = useState(10);
    const [speedUnit, setSpeedUnit] = useState('metros');
    const [speedTime, setSpeedTime] = useState(1);
    const [speedTimeUnit, setSpeedTimeUnit] = useState('segundos');
    const [timeRequired, setTimeRequired] = useState(null);

    const updateFromUnit = (unit, value) => {
        const baseMeters = value / unitConversions[unit];
        const updated = {};
        for (let u in unitConversions) {
            updated[u] = baseMeters * unitConversions[u];
        }
        setDistances(updated);
    };

    const handleDistanceChange = (unit, value) => {
        const val = parseFloat(value);
        if (!isNaN(val)) {
            updateFromUnit(unit, val);
        }
    };

    useEffect(() => {
        const distanceInMeters = travelDistance / unitConversions[travelUnit];
        const speedInMeters = speedDistance / unitConversions[speedUnit];
        const timeInSeconds = speedTime * timeConversions[speedTimeUnit];
        const speedInMetersPerSecond = speedInMeters / timeInSeconds;

        if (speedInMetersPerSecond > 0) {
            const totalTimeSeconds = distanceInMeters / speedInMetersPerSecond;
            setTimeRequired(totalTimeSeconds);
        } else {
            setTimeRequired(null);
        }
    }, [travelDistance, travelUnit, speedDistance, speedUnit, speedTime, speedTimeUnit]);

    const renderUnitOptions = () =>
        Object.keys(unitConversions).map((unit) => (
            <MenuItem key={unit} value={unit}>
                {unit}
            </MenuItem>
        ));

    const renderTimeOptions = () =>
        Object.keys(timeConversions).map((unit) => (
            <MenuItem key={unit} value={unit}>
                {unit}
            </MenuItem>
        ));

    return (
        <ThemeProvider theme={theme}>
            <Card  sx={{bgcolor: 'rgba(7,44,189,0.4)'}}>
                <Box sx={{ p: 4, maxWidth: 700, mx: 'auto' }}>
                    <Typography variant="h4" gutterBottom>
                        Conversor de Distancias
                    </Typography>

                    <Grid container spacing={2}>
                        {Object.keys(distances).map((unit) => (
                            <Grid item xs={12} sm={6} md={4} key={unit}>
                                <TextField
                                    label={unit.charAt(0).toUpperCase() + unit.slice(1)}
                                    type="number"
                                    fullWidth
                                    value={distances[unit]}
                                    onChange={(e) => handleDistanceChange(unit, e.target.value)}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <Divider sx={{ my: 4 }} />

                    <Typography variant="h5" gutterBottom>
                        Tiempo de Viaje
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Distancia a Recorrer"
                                type="number"
                                fullWidth
                                value={travelDistance}
                                onChange={(e) => setTravelDistance(parseFloat(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Unidad</InputLabel>
                                <Select
                                    value={travelUnit}
                                    label="Unidad"
                                    onChange={(e) => setTravelUnit(e.target.value)}
                                >
                                    {renderUnitOptions()}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Recorrido por tiempo"
                                type="number"
                                fullWidth
                                value={speedDistance}
                                onChange={(e) => setSpeedDistance(parseFloat(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel>Unidad de Distancia</InputLabel>
                                <Select
                                    value={speedUnit}
                                    label="Unidad de Distancia"
                                    onChange={(e) => setSpeedUnit(e.target.value)}
                                >
                                    {renderUnitOptions()}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <TextField
                                label="Tiempo"
                                type="number"
                                fullWidth
                                value={speedTime}
                                onChange={(e) => setSpeedTime(parseFloat(e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <FormControl fullWidth>
                                <InputLabel>Unidad de Tiempo</InputLabel>
                                <Select
                                    value={speedTimeUnit}
                                    label="Unidad de Tiempo"
                                    onChange={(e) => setSpeedTimeUnit(e.target.value)}
                                >
                                    {renderTimeOptions()}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h6">
                            Tiempo Estimado:{' '}
                            {timeRequired !== null
                                ? `${(timeRequired / 60).toFixed(2)} Minutos (${timeRequired.toFixed(2)} Segundos)` +
                                    (timeRequired >= 3600
                                        ? ` ≈ ${(timeRequired / 3600).toFixed(2)} Horas`
                                        : '')
                                : 'Velocidad Inválida'}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </ThemeProvider>
    );
};

export default DistanceConverter;
