import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer";
import { Taskreducer } from "./Taskreducer/reducer";
const rootReducer = combineReducers({
  userReducer,
  Taskreducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
