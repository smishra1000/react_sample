import { combineReducers } from "redux";

import CounterReducer from "./counterReducer";
import EmployeeReducer from "./employeeReducer";


const rootReducer = combineReducers({counterData:CounterReducer,employeeData:EmployeeReducer})

export default rootReducer