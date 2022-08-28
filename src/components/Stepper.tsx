import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import StepButton from "@mui/material/StepButton";

type Step = {
  label: string;
  Component: React.ReactNode;
  hasError: boolean;
};

type StepProps = {
  items: Step[];
};

export function Steps({ items }: StepProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const isLastStep = activeStep === items.length - 1;

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} nonLinear>
        {items.map(({ label, hasError }, index) => {
          return (
            <Step key={label}>
              <StepButton onClick={() => setActiveStep(index)}>
                <StepLabel error={hasError}>{label}</StepLabel>
              </StepButton>
            </Step>
          );
        })}
      </Stepper>

      <Box minHeight={"30vh"}>{items[activeStep].Component}</Box>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Voltar
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {isLastStep ? (
          <Button key="enviar" type="submit">
            Enviar
          </Button>
        ) : (
          <Button key="proximo" type="button" onClick={handleNext}>
            Próximo
          </Button>
        )}
      </Box>
    </Box>
  );
}
