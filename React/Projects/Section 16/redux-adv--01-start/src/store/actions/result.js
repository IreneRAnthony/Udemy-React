import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            // const olCounter = getState().ctr.counter;
            // console.log(olCounter);
            dispatch(saveResult(res));
        }, 2000)
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};