import React from 'react';

import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardIcon from '../../Card/CardIcon';
import CardFooter from '../../Card/CardFooter';

//Material ui icons
import { List, DateRange } from '@material-ui/icons';

//Material ui core components
import { makeStyles } from "@material-ui/core/styles";

import styles from '../../../assets/jss/sqedulize/components/cardListStyles';

const useStyles = makeStyles(styles);

const CardList = props => {
    const classes = useStyles();
    let list = (props.lists.map((list, index) => (
        <GridItem xs={12} sm={6} md={3} key={list.name + index}>
            <Card>
                <CardHeader color="success" stats icon>
                    <CardIcon color={list.color}>
                        {console.log(list.color)}
                        <list.icon />
                    </CardIcon>
                    <p className={classes.cardCategory}>Incomplete</p>
                    <h3 className={classes.cardTitle}>{list.listName}</h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={classes.stats}>
                        <DateRange />
                        Last 24 Hours
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
    )));
    return(
        <GridContainer>
            {list}
        </GridContainer>
    );
};

export default CardList;