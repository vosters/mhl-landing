import React from "react";
import Stats from "./Stats";
// import withStyles from "@material-ui/core/styles/withStyles";
// import styles from "../withStyles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import {
  // Typography,
  // Paper,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel
} from "@material-ui/core";
const useStyles = makeStyles(styles);

function MultipleChoice(props) {
  // const { classes } = props;
  const classes = useStyles();

  const update = e => {
    props.update(e.target.name, e.target.checked);
  };

  return (
    <Card>
      <CardBody className={classes.flexCenter}>
        <h3>{props.question.headline}</h3>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.legend}>Select all that apply</FormLabel>
          <FormGroup>
            {props.question.options.map(option => {
              return (
                
                <FormControlLabel
                  key={option.name}
                  control={
                    <Checkbox
                      checked={props.state[option.name]}
                      onChange={update}
                      value={option.name}
                      name={option.name}
                    />
                  }
                  label={option.label}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Stats step={1} {...props} classes={classes}/>
      </CardFooter>
    </Card>
  );
}

export default MultipleChoice;
