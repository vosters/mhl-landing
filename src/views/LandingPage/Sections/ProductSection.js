import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Group from "@material-ui/icons/Group";
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <div className={classes.title}>
            <h2>
              "The MHL gave me the tools and support I needed to tackle my
              anxiety and depression."
            </h2>
          </div>
          {/* <h5 className={classes.description}>
          "The MHL gave me the tools and support I needed to tackle my anxiety and depression."
          </h5> */}
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Daily Tracking"
              description="Gain a better understanding what's helping and holding you back through daily reflections and habit tracking"
              icon={TrendingUp}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Team Support"
              description="Mental health is a team support. Get accountability and motivation from a team competing against similar opponents."
              icon={Group}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Educational Gameplans"
              description="Daily educational content to teach you new strategies and give you the motivation to keep going."
              icon={Assignment}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
