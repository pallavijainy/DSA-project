import {applyMiddleware, legacy_createStore} from "redux";
import Reducer from "./Reducer";
import thunk from "redux-thunk"

// import { compose } from "redux";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = legacy_createStore(Reducer,applyMiddleware(thunk))

