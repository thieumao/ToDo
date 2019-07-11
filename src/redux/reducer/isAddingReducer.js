const isAddingReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_ADD') return !state;
    return state;
};

export default isAddingReducer;
