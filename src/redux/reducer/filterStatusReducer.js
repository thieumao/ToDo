const filterStatusReducer = (state = 'TODO', action) => {
    if (action.type === 'FILTER_ALL') return 'ALL';
    if (action.type === 'FILTER_DONE') return 'DONE';
    if (action.type === 'FILTER_TODO') return 'TODO';
    return state;
};

export default filterStatusReducer;
