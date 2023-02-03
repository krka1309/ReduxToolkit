import { call, put, takeEvery, fork, take } from "redux-saga/effects";
import { select } from "redux-saga/effects";
import { getEmployeeList, setEmployeeList } from "../Slices/userSlice";
const apiUrl = `https://jsonplaceholder.typicode.com/users`;
function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => response.json()).catch((error) => { throw error })
}
function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({ type: 'SET_SELECTED_ID', users: action.state.users })
  }
  catch (e) {
    yield put(console.log(e.message));
  }
}
const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}
function* getUsersSaga() {
  const { response, error } = yield call(getUsers)
  if (response) {
    const data = yield response.json()
   // yield put({ type: 'SET_EMPLOYEE_LIST', payload: data })
   yield put(setEmployeeList(data))
  } else {
    console.log('error: ', error.message)
  }
}
// const getEmployees=state=>state.employee.employeeList;


function* userSaga() {
  yield takeEvery(getEmployeeList.type, getUsersSaga);
  //   // yield takeEvery(getState)


}

export default userSaga;