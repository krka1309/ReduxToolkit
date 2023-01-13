import {call,put,takeEvery} from "redux-saga/effects";
const apiUrl=`https://jsonplaceholder.typicode.com/users`;
function getApi(){
    return fetch(apiUrl,{method:'GET',
headers:{
    'Content-Type': 'application/json',
}}).then(response=>response.json()).catch((error)=>{throw error})
}
function* fetchUsers(action){
    try{
        const users=yield call(getApi);
        yield put({type:'SET_SELECTED_ID',users:action.state.users})
    }
    catch(e){
        yield put (console.log(e.message));
    }
}

function* userSaga(){
    yield takeEvery('SET_SELECTED_ID',fetchUsers);

}
export default userSaga;