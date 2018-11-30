import { createStore,combineReducers } from "redux";
import rootReducer from "../reducers/index";
import {mathReducer} from "../reducers/index";

const store = createStore(rootReducer);
export default store;