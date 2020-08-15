import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    padding: "0 15px !important",
    width: '550px'
  }
};

const useStyles = makeStyles(styles);

const GridItem = (props) => {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...props} className={classes.grid}>
      {props.children}
    </Grid>
  );
}

export default GridItem;