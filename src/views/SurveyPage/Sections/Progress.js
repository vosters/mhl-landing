import React from "react";
import { LinearProgress } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
const useStyles = makeStyles(styles);

const Progress = props => {
  const classes = useStyles();

  const [completed, setCompleted] = React.useState(0);
  const [done, setDone] = React.useState(null);

  React.useEffect(() => {
    if (props.isActive && !done) {
      function progress() {
        setCompleted(oldCompleted => {
          if (oldCompleted === 100) {
            props.nextStep();
            setDone('done')
          }
          const diff = Math.random() * 10;
          return Math.min(oldCompleted + diff, 100);
        }
        )
      }

      const timer = setInterval(progress, 500);
      return () => {
        clearInterval(timer);
      };

    } else if (!props.isActive && done) {
      clearTimeout(done);
      setDone(null);
      setCompleted(0);
    }
  });

  return (
    <Card>
      <CardBody className={classes.flexCenter}>
        <h3>Creating Your Game Plan</h3>
        <div className={classes.root}>
          <LinearProgress variant="determinate" value={completed} />
        </div>
        <hr/><hr/>
      </CardBody>
    </Card>

  );
};

// export default withStyles(styles)(Progress);
export default Progress
