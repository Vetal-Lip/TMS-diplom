import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";


export const rootMidlleware = composeWithDevTools(applyMiddleware(thunk));