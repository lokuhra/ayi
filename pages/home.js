import React from 'react';
import dynamic from 'next/dynamic';
import LastMovements from '../src/components/Filters/Table/LastMovements';
import Settlements from '../src/components/Filters/Table/Settlements';
import {makeStyles} from "@material-ui/core";

const DynamicComponentWithNoSSR = dynamic(
  () => import('../src/components/Layout'),
  { ssr: false }
);

const Index = () => {
    const useStyles = makeStyles(theme => ({
        padding: {
            paddingTop: "51px",
            paddingLeft: "15px",
            paddingRight: "15px",
        },

    }));
    const classes = useStyles();

    return(
  <DynamicComponentWithNoSSR>
      <div className={classes.padding}>
          <Settlements />
          <LastMovements />
      </div>

  </DynamicComponentWithNoSSR>
)};

export default Index;
