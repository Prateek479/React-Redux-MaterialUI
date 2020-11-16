import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./Reducers";
import { users } from "./Sagas/userSagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(users);

export default store;
