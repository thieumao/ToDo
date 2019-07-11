import { combineReducers } from 'redux';

import arrWorksReducer from './arrWorksReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';

const reducer = combineReducers({
    arrWorks: arrWorksReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer
});

export default reducer;
