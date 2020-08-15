import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultId);
    return {
        ...state,
        results: updatedArray};          
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT : return updateObject(state, {results: state.results.concat({id: new Date(),value: action.result})});
        case actionTypes.DELETE_RESULT : return deleteResult(state, action);
        default : return state;
    }
}

export default reducer;