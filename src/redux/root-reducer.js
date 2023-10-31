import { combineReducers } from "redux"; 
import apiReducer from "./api/reducer"; //o nosso useReducer



const rootReducer = combineReducers({ apiReducer });

export default rootReducer;