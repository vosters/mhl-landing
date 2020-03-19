import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

// VOSTERS ADDS
import StepWizard from "react-step-wizard";
import { default as MultipleChoice } from "./Sections/MultipleChoice";
import { default as questions } from "./Sections/questions";
import { default as SingleInput } from "./Sections/SingleInput";
import { default as Progress } from "./Sections/Progress";
import { default as Register } from "./Sections/Register";

const useStyles = makeStyles(styles);

export default function SurveyPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [state, setState] = React.useState({
    form: JSON.parse(sessionStorage.getItem("form")) || {}
  });

  const updateForm = (key, value) => {
    const { form } = state;

    form[key] = value;
    // localStorage.setItem(key, value);

    setState({
      ...state,
      form
    });
  };

  React.useEffect(() => {
    sessionStorage.setItem("form", JSON.stringify(state.form));
  }, [state]);

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={9} md={4}>
              <StepWizard isHashEnabled>


                <SingleInput
                  hashKey={"First"}
                  state={state.form}
                  update={updateForm}
                  question={questions.username}
                />


                <MultipleChoice
                  hashKey={"FirstStep"}
                  state={state.form}
                  update={updateForm}
                  question={questions.diagnoses}
                />
                <Progress />
                <Register/>
              </StepWizard>
            </GridItem>
          </GridContainer>
        </div>
        {/* <Footer whiteFont /> */}
      </div>
    </div>
  );
}
