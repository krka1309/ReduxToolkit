import { combineReducers } from 'redux';
import iDReducer from '../reducers/iDReducer';

const reducers = combineReducers({
    employee: iDReducer,
})

export default reducers;