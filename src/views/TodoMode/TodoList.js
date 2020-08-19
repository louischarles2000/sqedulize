import React from 'react';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomTab from '../../components/CustomTab/CustomTab';

import All from "@material-ui/icons/List";
import Done from "@material-ui/icons/Done";
import InProgress from "@material-ui/icons/Sync";
import Tasks from '../../components/Tasks/Tasks';

const TodoList = props => {
    const testText = {
        one: [
            {text: 'Add somtheing to something', checked: true},
            {text: 'Do a lot of nothing', checked: false},
            {text: 'Sleep for hours', checked: true},
            {text: 'Make some noice', checked: false},
            {text: 'Pranck call people', checked: false},
            {text: 'Play some Fifa', checked: true},
            {text: 'Take cocain till I nose bleed', checked: false},
            {text: 'Wash the blood of my face', checked: true}
        ]
    }
    const done = [];
    testText.one.map(task => task.checked ? done.push(task) : null);
    return(
        <GridContainer>
            <GridItem xs={12} sm={12} md={10}>
                <CustomTab
                    title="Shopping list"
                    headerColor="success"
                    tabs={[
                        {
                            tabName:"List",
                            tabIcon: All,
                            tabContent: (
                                <Tasks 
                                    tasks={testText.one}
                                />
                            )
                        },
                        {
                            tabName:"Done",
                            tabIcon: Done,
                            tabContent: (
                                <Tasks 
                                    done
                                    tasks={done}
                                />
                            )
                        }
                    ]}
                    
                    />
            </GridItem>
        </GridContainer>
    );
};

export default TodoList;