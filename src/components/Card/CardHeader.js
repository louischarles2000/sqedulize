import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/sqedulize/components/cardHeaderStyles';

const useStyles = makeStyles(styles);

const CardHeader = props => {
    const classes = useStyles();
    const { color, plain, stats, icon, children, ...rest } = props;
    const cardHeaderClasses = classNames(classes.cardHeader, {
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderIcon]: icon,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderStats]: stats
    });
    return(
        <div className={cardHeaderClasses} {...rest }>
            {children}
        </div>
    );
};

// CardHeader.propTypes = {
//     className = PropTypes.string,
//     color: PropTypes.oneOf([
//         "warning",
//         "success",
//         "danger",
//         "info",
//         "primary",
//         "rose"
//     ]),
//     children: PropTypes.node,
//     plain: PropTypes.bool,
//     stats: PropTypes.bool,
//     icon: PropTypes.bool
// }

export default CardHeader;