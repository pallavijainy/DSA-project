import {legacy_createStore,compose} from "redux";
import { reducer } from "./reducer";


const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=legacy_createStore(reducer,composeEnhancer())