import React from 'react';

//Material ui core comps
import { Tabs, Tab, makeStyles } from '@material-ui/core';

import styles from '../../assets/jss/sqedulize/components/customTabsStyle';
import Card from '../Card/Card';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles(styles);

const CustomTab = props => {
    const [value, setValue] = React.useState('');

    const changeVlaueHandler = (event, val) => {
        setValue(val);
    }
    const classes = useStyles();
    const { headerColor, plainTabs, tabs, title, rtlActive } = props;

    return(
        <Card plain={plainTabs}>
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
                    const icon = {};
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