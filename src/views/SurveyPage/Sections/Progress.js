import React from "react";
import { Typography, Paper, LinearProgress } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../withStyles";

const Progress = props => {
  const { classes } = props;

  const [completed, setCompleted] = React.useState(0);
  const [done, setDone] = React.useState(null);

  React.useEffect(() => {
    if (props.isActive && !done) {
      function progress() {
        setCompleted(oldCompleted => {
          if (oldCompleted === 100) {
            props.nextStep();
            // return 0;
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
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography component="h3" variant="h5">
          Creating Your Game Plan
        </Typography>
        <div className={classes.root}>
          <LinearProgress variant="determinate" value={completed} />
        </div>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(Progress);
