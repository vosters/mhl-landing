import React from "react";
import Stats from "./Stats";
// import withStyles from "@material-ui/core/styles/withStyles";
// import styles from "../withStyles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

const SingleInput = props => {
  // const { classes } = props;
  const classes = useStyles();

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const update = e => {
    props.update(e.target.name, e.target.value);
  };

  return (
    <Card className={classes[cardAnimaton]}>
    {/* <Card> */}
      <CardBody>
        <h3 className={classes.textCenter}>{props.question.headline}</h3>
        <CustomInput
          labelText={props.question.label}
          id="float"
          formControlProps={{
            fullWidth: true
          }}
          name={props.question.name} 
          value={props.state[props.question.name]}
          onChange={update}
        />
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Stats step={1} {...props} />
        {/* <Button simple color="primary" size="lg">
            Get started
                    </Button> */}
      </CardFooter>
    </Card>
  );
};

export default SingleInput;
