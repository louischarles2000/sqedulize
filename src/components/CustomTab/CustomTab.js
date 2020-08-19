import React from 'react';

//Material ui core comps
import { Tabs, Tab, makeStyles } from '@material-ui/core';

import styles from '../../assets/jss/sqedulize/components/customTabsStyle';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';

const useStyles = makeStyles(styles);

const CustomTab = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const changeVlaueHandler = (event, val) => {
        setValue(val);
    }
    const { headerColor, plainTabs, tabs, title } = props;

    return(
        <Card plain={plainTabs} onClick={props.clicked}>
            <CardHeader color={headerColor} plain={plainTabs}>
                {title !== undefined ? <div className={classes.cardTitle}>{title}</div> : null}
                <Tabs
                    onChange={changeVlaueHandler}
                    classes={{
                        root: classes.tabsRoot,
                        indicator: classes.displayNone,
                        scrollButtons: classes.displayNone  
                    }}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                {tabs.map((prop, key) => {
                    let icon = {};
                    if (prop.tabIcon) {
                        icon = {
                            icon: <prop.tabIcon />
                        };
                    }
                    return (
                    <Tab
                        classes={{
                        root: classes.tabRootButton,
                        selected: classes.tabSelected,
                        wrapper: classes.tabWrapper
                        }}
                        key={key}
                        label={prop.tabName}
                        {...icon}
                    />
                    );
                })}
                </Tabs>
            </CardHeader>
            <CardBody>
                {tabs.map((prop, key) => {
                if (key === value) {
                    return <div key={key}>{prop.tabContent}</div>;
                }
                return null;
                })}
            </CardBody>
        </Card>
    );
}

export default CustomTab;