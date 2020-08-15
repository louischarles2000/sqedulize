import React from 'react';

import classNames from 'classnames'

import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import styles from '../../assets/jss/sqedulize/components/cardStyles';

const useStyles = makeStyles(styles);

const Card = props => {
    const classes = useStyles();
    const { className, plain, children, profile, ...rest } = props;
    const cardClasses = classNames(classes.card, {
        [classes.cardPlain]: plain,
        [classes.cardProfile]: profile,
        [className]: className !== undefined
    });
    
    return(
        <div className={cardClasses} {...props}>
            {children}
        </div>
    );
}

Card.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    profile: PropTypes.bool,
    chart: PropTypes.bool,
    children: PropTypes.node
};

export default Card;