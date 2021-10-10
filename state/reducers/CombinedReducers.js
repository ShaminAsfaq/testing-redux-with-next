import { combineReducers } from "redux";
import numberReducer from './numberReducer';
import titleReducer from './titleReducer';

const reducerList = combineReducers({
    totalNumber: numberReducer,
    titleList: titleReducer
});

export default reducerList;