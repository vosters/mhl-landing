import React from "react";
import { Button } from "@material-ui/core";

const buttonStyling = {
  margin: "10px",
  padding: "12px 30px"
}

const Stats = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
  step
}) => (

    <div>
      {currentStep > 1 && (
        <Button onClick={previousStep} variant="contained" color="primary" style={buttonStyling}>
          Back
        </Button>
      )
      }
      {step < totalSteps ? (
        <Button onClick={nextStep} variant="contained" color="primary" style={buttonStyling}>
          Next
        </Button>
      ) : (
          <Button onClick={nextStep} variant="contained" fullWidth color="primary">
            Finish
          </Button>
        )
      }
      {/* <hr />
        <div style={{ fontSize: '21px', fontWeight: '200' }}>
            <h4>Other Functions</h4>
            <div>Current Step: {currentStep}</div>
            <div>Total Steps: {totalSteps}</div>
            <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button>
            <button className='btn btn-block btn-default' onClick={lastStep}>Last Step</button>
            <button className='btn btn-block btn-default' onClick={() => goToStep(2)}>Go to Step 2</button>
        </div> */}
    </div>
  );

export default Stats;
