import React from 'react';
import PropTypes from 'prop-types';
import {  } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SideDrawer from '../../components/Drawer/Drawer';
import AppbarComp from '../../components/Appbar/Appbar';
import styles from '../../assets/jss/sqedulize/layouts/layoutStyles';

const useStyles = makeStyles(styles);

const Layout = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarComp toggle={handleDrawerToggle}/>
      <SideDrawer mobileOpen={mobileOpen} toggle={closeDrawer}/>

      {/* Main route entries */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
