import { select, takeEvery, put } from "redux-saga/effects";
import { filterEmployeeList, setEmployeeList } from "../Slices/userSlice";

function* getState(action) {
    const state = yield select();
    const empName = state.employee.employeeList;
    const result = empName.filter((ss) => ss.name.includes(action.payload));
    yield put(setEmployeeList(result))
    console.log(result);
}
export const status = select();
function* filterEmployee() {
    yield takeEvery(filterEmployeeList.type, getState)
}
export { filterEmployee, getState };