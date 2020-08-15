import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const styles = {
    grid: {
      margin: "0 -15px !important",
      width: "unset"
    }
  };
const useStyle = makeStyles(styles);
const GridContainer = props => {
    const classes = useStyle();
    return(
        <Grid container {...props} className={classes.grid}>
            {props.children}
        </Grid>
    );
};

export default GridContainer;