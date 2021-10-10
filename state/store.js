import { applyMiddleware, createStore } from "redux";
import reducerList from "./reducers/CombinedReducers";
import thunk from "redux-thunk";

export const store = createStore(
    reducerList,
    {}, //  Default Store/State
    applyMiddleware(thunk)
);