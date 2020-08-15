import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './favicon.ico';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styles from '../../assets/jss/sqedulize/components/logoStyles';

const useStyles = makeStyles(styles);
const Logo = () => {
    const classes = useStyles();
    return(
    <div className={classes.logo}>
        <NavLink
            to="/"
            className={classes.logoLink}
        >
            <div className={classes.logoImage}> 
            <img src={logo} alt="logo" className={classes.img} />
            </div>
            Louis Charles
        </NavLink>
    </div>
    );
};

export default Logo;