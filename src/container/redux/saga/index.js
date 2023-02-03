import {all} from 'redux-saga/effects'
import { filterEmployee } from './filterEmployee'
import userSaga from './userSaga'
export default function* rootSaga(){
    yield all([userSaga(),filterEmployee()])
}