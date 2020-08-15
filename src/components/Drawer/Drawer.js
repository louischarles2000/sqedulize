import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import image from './drawer-img.jpg';
import image from './drawer-img3.JPEG';
// import image from './drawer-img2.png';
import { mainRoutes } from '../../routes';
import styles from '../../assets/jss/sqedulize/components/drawerStyles';
import Logo from '../LogoContainer/Logo';

const useStyles = makeStyles(styles);

const  DrawerComponent = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [active, setActive] = React.useState('/');

  React.useEffect(() => {
    const path = props.location.pathname;
    // console.log(path);
    setActive(path);
  }, [props.location.pathname]);

  const drawer = (
    <div style={{zIndex: '5', color: '#fff'}}>
      <div className={classes.toolbar} >
        <Logo />
      </div>
      {/* <Divider className={classes.divider}/> */}
      <List className={classes.list}>
        {mainRoutes.map(route => (
          <NavLink to={route.route} key={route.route} onClick={props.toggle} style={{textDecoration: 'none', color: '#fff'}}>
            <ListItem selected={route.route === active}>
                <ListItemIcon className={classes.listIcon}><route.icon /></ListItemIcon>
                <ListItemText primary={route.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider  className={classes.divider}/>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.listIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
        <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={props.mobileOpen}
            onClose={props.toggle}
            classes={{
            paper: classes.drawerPaper,
            }}
            ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            }}
        >
            {drawer}
            {
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")", backgroundPosition: 'center', backgroundSize: 'cover'}}
            />}
        </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
        <Drawer
            style={{ backgroundImage: "url(" + image + ")"}}
            classes={{
            paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
        >
            {drawer}
            {
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")"}}
            />}
        </Drawer>
        </Hidden>
  </nav>
  );
}

export default withRouter(DrawerComponent);
