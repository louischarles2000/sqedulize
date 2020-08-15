import React from 'react';
import CardList from '../../components/Lists/CardList/CardList';
import FabComp from '../../components/Buttons/FAB';
import { makeStyles } from '@material-ui/core/styles';
import { warningColor, infoColor, primaryColor, dangerColor } from '../../shared/style_utility';
import { PersonSharp, Work, Book, Home } from '@material-ui/icons';

const Todo = props => {
    const testList = [
        {
            listName: 'Shopping list',
            items: ['Soap', 'Lotion', 'Sugar', 'Ice crean'],
            icon: PersonSharp,
            color: "warning",
            status: 'complete'
        },
        {
            listName: 'To do today list',
            items: ['Bath the dog', 'Wash the car', 'Read some book', 'Visit my girl ;D'],
            icon: Work,
            color: "info",
            status: 'incomplete'
        },
        {
            listName: 'To do today list',
            items: ['Bath the dog', 'Wash the car', 'Read some book', 'Visit my girl ;D'],
            icon: Book,
            color: "primary",
            status: 'incomplete'
        },
        {
            listName: 'To do today list',
            items: ['Bath the dog', 'Wash the car', 'Read some book', 'Visit my girl ;D'],
            icon: Home,
            color: "danger",
            status: 'complete'
        },
        {
            listName: 'To do today list',
            items: ['Bath the dog', 'Wash the car', 'Read some book', 'Visit my girl ;D'],
            icon: Book,
            color: "primary",
            status: 'complete'
        },
        {
            listName: 'To do today list',
            items: ['Bath the dog', 'Wash the car', 'Read some book', 'Visit my girl ;D'],
            icon: PersonSharp,
            color: "warning",
            status: 'incomplete'
        }
    ];

    let toDo = (
        <div>
            <FabComp />
            <CardList lists={testList} />
        </div>
    );
    
    return toDo;
}

export default Todo;