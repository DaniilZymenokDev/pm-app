import * as React from 'react';
import {Dispatch, SetStateAction, useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './NewConnection.module.scss';
import {IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DataSettings from "./steps/DataSettings";
import Credentials from "./steps/Credentials";
import {useActions, useAppDispatch, useAppSelector} from "../../store/hooks";
import Configuration from "./steps/Configuration";

const steps = ['1', '2', '3'];
type PropTypes = {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    setList:Function;
}

export default function HorizontalNonLinearStepper(props: PropTypes) {

    const connectionStore = useAppSelector(state => state.projectsConnections);

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const {addConnectionName,addDataSource,
        addCreatedBy, addCreatedOn,
        addUserName, addPassword, addConfig,
        addConfigString, defaultState}=useActions();

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <DataSettings  setConnectionName={(e:any)=>{addConnectionName(e)}}
                                     setDataSource={(e:any)=>{addDataSource(e)}}/>
            case 1:
                return <Credentials setUserName={(e:any)=>{addUserName(e)}}
                                    setPassword={(e:any)=>{addPassword(e)}}/>
            case 2:
                return <Configuration/>
        }
    }

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
        if (completedSteps() === totalSteps()) {
            props.setActive(false);
            props.setList((prevList:Array<object>)=>[...prevList, connectionStore]);
            defaultState();
        }
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <div className={styles.modalBack}>
            <Box className={styles.modalContent} sx={{width: '100%'}} onClick={e => e.stopPropagation()}>
                <div className={styles.stepperHeader}>
                    <p>Add new connection</p>
                    <IconButton onClick={() => {
                        props.setActive(false)
                    }}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <Stepper className={styles.stepper} nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div className={styles.stepperBody}>
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{mt: 2, mb: 1}}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                <Box sx={{flex: '1 1 auto'}}/>
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{mt: 2, mb: 1}}>
                                {getStepContent(activeStep)}
                            </Typography>
                            <Box className={styles.stepperBtns} sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{mr: 1}}
                                >
                                    Cancel
                                </Button>

                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" sx={{display: 'inline-block'}}>
                                            Step {activeStep + 1} already completed
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1
                                                ? 'Save'
                                                : 'Next'}
                                        </Button>
                                    ))}
                            </Box>
                        </React.Fragment>
                    )}
                </div>
            </Box>
        </div>
    );
}