import React from 'react';
import CardList from '../../components/Lists/CardList/CardList';

const Todo = props => {
    const testList = [
        {
            listName: 'Shopping list',
            items: ['Soap', 'Lotion', 'Sugar', 'Ice crean']
        },
        {
            listName: 'To do today list',
            items: ['Bath the dog', 'Wash the car', 'Read some book', 'Visit my girl ;D']
        }
    ]
    return(
        <div>
            <h2>This is the todo route</h2>
            <CardList lists={testList} />
        </div>
    );
}

export default Todo;