import React from "react";
// import Stats from "./Stats";
// import withStyles from "@material-ui/core/styles/withStyles";
// import styles from "../withStyles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Button from "components/CustomButtons/Button.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

const useStyles = makeStyles(styles);

const Register = props => {
    // const { classes } = props;
    const classes = useStyles();

    // const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    // setTimeout(function () {
    //     setCardAnimation("");
    // }, 700);

    // const update = e => {
    //     props.update(e.target.name, e.target.value);
    // };

    return (
        <Card>
            <form className={classes.form}>
                <CardBody>
                    <h3>Register</h3>
                    <CustomInput
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "text",
                            endAdornment: (
                                <InputAdornment position="end">
                                    <People className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                    />
                    <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "email",
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                    />
                    <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "password",
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Icon className={classes.inputIconsColor}>
                                        lock_outline
                            </Icon>
                                </InputAdornment>
                            ),
                            autoComplete: "off"
                        }}
                    />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                        Register
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};

export default Register;



