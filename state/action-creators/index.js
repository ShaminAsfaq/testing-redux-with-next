export const increment = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'INCREMENT',
            payload: amount
        });
    }
}

export const decrement = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'DECREMENT',
            payload: amount
        });
    }
}

export const insertTitle = (title) => {
    return (dispatch) => {
        dispatch({
            type: 'INSERT',
            payload: title
        });
    }
}

export const removeTitle = (title) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE',
            payload: title
        });
    }
}



