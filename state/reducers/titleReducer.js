const reducer = (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case 'INSERT':
            return [...state, action.payload];
        case 'REMOVE':
            return state.filter(item => item!==action.payload);
        default:
            return state;
        
    }
}

export default reducer;


