import TodoReducers from "./TodoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers( {
  TodoReducers:TodoReducers, 

})

export default rootReducer;