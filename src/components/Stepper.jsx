import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import PropTypes from 'prop-types';

const HorizontalNonLinearStepper = ({steps, activeStep, setActiveStep}) => {
    const completed = []
    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: '100%', mt: '30px'}}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)} sx={{bgcolor: 'rgba(231,196,123,0.8)', borderRadius: '50% 20% / 10% 40%;'}}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                        </Box>
                    </React.Fragment>
            </div>
        </Box>
    );
}

HorizontalNonLinearStepper.propTypes = {
    steps: PropTypes.array.isRequired,
    activeStep: PropTypes.any.isRequired,
    setActiveStep: PropTypes.func.isRequired,
};

export default HorizontalNonLinearStepper