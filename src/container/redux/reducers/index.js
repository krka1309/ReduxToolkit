import {combineReducers} from 'redux';
import  iDReducer  from '../reducers/iDReducer';

const reducers=combineReducers({
    allId:iDReducer,
})

export default reducers;