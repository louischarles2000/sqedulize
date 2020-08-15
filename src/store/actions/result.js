import * as actionTypes from './actionsTypes';

export const saveResult = res => {
    const result = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: result  
    }
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        const oldCounter = getState().ctr.counter;
        setTimeout(() => {
            console.log('old state: ',oldCounter);
           dispatch(saveResult(result));
        }, 2000);       
    }
  
}


export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: id 
    }
}