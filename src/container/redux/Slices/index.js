import { combineReducers } from 'redux';
import userSlice, { filterEmployeeList } from "../Slices/userSlice";

const reducers = combineReducers({
    employee: userSlice,
    filterData:filterEmployeeList,
})

export default reducers;