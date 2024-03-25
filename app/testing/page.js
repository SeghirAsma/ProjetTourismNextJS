'use client'
import React ,{useState} from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../StylesCss/home.css';
import '../StylesCss/default.css';
import '../StylesCss/testing.css';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import DnsIcon from '@mui/icons-material/Dns';







const steps = ['Choose your items', 'Payment details', 'Review your order'];

export default function HorizontalNonLinearStepper({ reservedData }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [currentListStep, setCurrentListStep] = useState(0); // Étape de la liste actuellement affichée

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
        ? 
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    setCurrentListStep(newActiveStep); // Met à jour l'étape de la liste lorsque vous cliquez sur "Next"

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCurrentListStep((prevListStep) => prevListStep - 1); // Met à jour l'étape de la liste lorsque vous cliquez sur "Back"

  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    setCurrentListStep(step); // Met à jour l'étape de la liste lorsque vous cliquez sur une étape spécifique

  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCurrentListStep(0); // Réinitialise l'étape de la liste lorsque vous cliquez sur "Reset"

    setCompleted({});
  };

  const stepLists = [
    // Liste correspondant à la première étape
    (
      <List
        sx={{ width: '950px', height: 'auto', bgcolor: 'background.paper', marginTop:'30px', marginLeft:'260px',
        border: '1px solid #ccc', 
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'  }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader" style={{backgroundColor:'#f2e9f5'}}>
            Program Details
          </ListSubheader>
        }
      >
        <div>
          <ListItemButton >
            <ListItemIcon>
              <DnsIcon style={{color:'rgb(118, 56, 176)'}}/>
            </ListItemIcon>
            <ListItemText primary="Reference Program" style={{color:'rgb(118, 56, 176)'}} /> 
          </ListItemButton>
        </div>
        <div>
          <ListItemButton>
            <ListItemIcon>
              <CatchingPokemonIcon style={{color:'rgb(118, 56, 176)'}}/>
            </ListItemIcon>
            <ListItemText primary="Name Program" style={{color:'rgb(118, 56, 176)'}} />  
          </ListItemButton>
        </div>
      </List>
    ),
    // Ajoutez des listes supplémentaires pour les autres étapes si nécessaire
  ];

  return (
    <>
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              className="h-12 w-auto"
              src="/logotou.png"
              alt=""
            />
          </a>
        </div>
       
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           <button
 
        className="flex-none rounded-full bg-purple-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
        Log In <span aria-hidden="true">&rarr;</span>
      </button>
        </div>
      </nav>
    </header>
     {/* el zina l al ajneb ml fouk */}
     <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
       {/* el zina l al ajneb ml louta */}
      <div
        className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl "
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
      

        <div >
        <div>
{/* <p>Données réservées :</p>
<ul>
  {reservedData && reservedData.map((data, index) => (
    <li key={index}>
      <strong>Programme :</strong> {data.nameProgram}<br />
      <strong>Référence :</strong> {data.referenceProgram}<br />
    </li>
  ))}
</ul> */}


      <Box sx={{ marginTop:'90px', width: '1300px', marginLeft:'80px'}}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>
        {stepLists[currentListStep]} {/* Affiche la liste correspondante à l'étape actuelle */}
      </div>
   
       <div> 
      <React.Fragment>   
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext} sx={{ mr: 1 }}>
            Next
          </Button>
        </Box>
      </React.Fragment>  
     </div> 
  </div>
          
          
         

        </div>

      
      </div>
      
    </>

  );
}

