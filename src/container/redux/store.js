// import {createStore} from "redux";
// import reducers from "../redux/reducers"

// const store=createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(reducers)
// export default store;

import { createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers/index.js';
import rootReducer from "./Slices/index";
import rootSaga from './saga/index.js';

const sagaMiddleware = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;