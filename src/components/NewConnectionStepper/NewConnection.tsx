import * as React from 'react';
import {Dispatch, SetStateAction, useReducer} from 'react';
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
import Configuration from "./steps/Configuration";
import type {Connection} from "../../store/connectionsSlice";
import connectionsReducer, {addConnection} from '../../store/connectionsSlice';
import {useAppDispatch} from '../../store/hooks';

const steps = ['1', '2', '3'];
type PropTypes = {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    setList: Function;
}

enum ConnectionActionTypes {
    addConnectionName = 'addConnectionName',
    addDataSource = 'addDataSource',
    addCreatedOn = 'addCreatedOn',
    addCreatedBy = 'addCreatedBy',
    addUserName = 'addUserName',
    addPassword = 'addPassword',
    addConfiguration = 'addConfiguration',
    addConnectionString = 'addConnectionString',
}

type ConnectionAction = {
    type: ConnectionActionTypes, payload: string;
}
const newConnectionReducer = (state: Connection, action: ConnectionAction) => {
    switch (action.type) {
        case ConnectionActionTypes.addConnectionName:
            return {...state, connectionName: action.payload}
        case ConnectionActionTypes.addDataSource:
            return {...state, dataSource: action.payload}
        case ConnectionActionTypes.addCreatedBy:
            return {...state, createdBy: action.payload}
        case ConnectionActionTypes.addUserName:
            return {...state, userName: action.payload}
        case ConnectionActionTypes.addPassword:
            return {...state, password: action.payload}
        case ConnectionActionTypes.addConfiguration:
            return {...state, configuration: action.payload}
        case ConnectionActionTypes.addConnectionString:
            return {...state, connectionString: action.payload}
        case ConnectionActionTypes.addCreatedOn:
            return {...state, createdOn: action.payload}
        default:
            return state
    }
}
export default function HorizontalNonLinearStepper(props: PropTypes) {

    const getDate = ():string =>{
        const date = new Date();
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }

    const dispatch = useAppDispatch();
    const [connectionState, connectionDispatch] = useReducer(newConnectionReducer,
        {
            connectionName: '',
            dataSource: '',
            createdBy: '',
            createdOn: `${getDate()}`,
            userName: '',
            password: '',
            configuration: '',
            connectionString: '',
        });

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

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <DataSettings setConnectionName={(value: string) => {
                    connectionDispatch({type: ConnectionActionTypes.addConnectionName, payload: value})
                }}
                                     setDataSource={(value: string) => {
                                         connectionDispatch({type: ConnectionActionTypes.addDataSource, payload: value})
                                     }}/>
            case 1:
                return <Credentials setUserName={(value: string) => {
                    connectionDispatch({type: ConnectionActionTypes.addUserName, payload: value})
                }}
                                    setPassword={(value: string) => {
                                        connectionDispatch({type: ConnectionActionTypes.addPassword, payload: value})
                                    }}/>
            case 2:
                return <Configuration setConnectionString={(value: string) => {
                    connectionDispatch({type: ConnectionActionTypes.addConnectionString, payload: value})
                }}/>
        }
    }


    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
        if (completedSteps() === totalSteps()) {
            props.setActive(false);
            dispatch(addConnection(connectionState));
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