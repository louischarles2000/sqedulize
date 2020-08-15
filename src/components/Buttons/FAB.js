import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtonSize() {
  const classes = useStyles();

  return (
    <Fab variant="extended" style={{backgroundColor: '#43a047', color: '#fff'}} color="green" aria-label="add" className={classes.margin}>
        <AddIcon className={classes.extendedIcon} />
        Add list
    </Fab>
  );
}
