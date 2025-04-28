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
    FormControl
} from '@mui/material';

const unitConversions = {
    meters: 1,
    centimeters: 100,
    inches: 39.3701,
    feet: 3.28084,
    yards: 1.09361,
    kilometers: 0.001,
    miles: 0.000621371
};

const timeConversions = {
    seconds: 1,
    minutes: 1 / 60,
    hours: 1 / 3600,
    days: 1 / 86400
};

const DistanceConverter = () => {
    const [distances, setDistances] = useState({
        meters: 1,
        centimeters: 100,
        inches: 39.3701,
        feet: 3.28084,
        yards: 1.09361,
        kilometers: 0.001,
        miles: 0.000621371
    });

    const [travelDistance, setTravelDistance] = useState(100);
    const [travelUnit, setTravelUnit] = useState('meters');
    const [speedDistance, setSpeedDistance] = useState(10);
    const [speedUnit, setSpeedUnit] = useState('meters');
    const [speedTime, setSpeedTime] = useState(1);
    const [speedTimeUnit, setSpeedTimeUnit] = useState('seconds');
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
        const speedInMetersPerSecond =
            (speedDistance / unitConversions[speedUnit]) /
            (speedTime * timeConversions[speedTimeUnit]);

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
        <Box sx={{ p: 4, maxWidth: 700, mx: 'auto' }}>
            <Typography variant="h4" gutterBottom>
                Distance Converter
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
                Time to Travel
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Distance to Travel"
                        type="number"
                        fullWidth
                        value={travelDistance}
                        onChange={(e) => setTravelDistance(parseFloat(e.target.value))}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Unit</InputLabel>
                        <Select
                            value={travelUnit}
                            label="Unit"
                            onChange={(e) => setTravelUnit(e.target.value)}
                        >
                            {renderUnitOptions()}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Speed Distance"
                        type="number"
                        fullWidth
                        value={speedDistance}
                        onChange={(e) => setSpeedDistance(parseFloat(e.target.value))}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel>Distance Unit</InputLabel>
                        <Select
                            value={speedUnit}
                            label="Distance Unit"
                            onChange={(e) => setSpeedUnit(e.target.value)}
                        >
                            {renderUnitOptions()}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <TextField
                        label="Time"
                        type="number"
                        fullWidth
                        value={speedTime}
                        onChange={(e) => setSpeedTime(parseFloat(e.target.value))}
                    />
                </Grid>
                <Grid item xs={6} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel>Time Unit</InputLabel>
                        <Select
                            value={speedTimeUnit}
                            label="Time Unit"
                            onChange={(e) => setSpeedTimeUnit(e.target.value)}
                        >
                            {renderTimeOptions()}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h6">
                    Estimated Time:{' '}
                    {timeRequired !== null
                        ? `${(timeRequired / 60).toFixed(2)} minutes (${timeRequired.toFixed(2)} seconds)`
                        : 'Invalid speed'}
                </Typography>
            </Box>
        </Box>
    );
};

export default DistanceConverter;