import { createStore, combineReducers } from "redux";
import FormReducer from './Reducers/FormReducer';
import moviesMiddlewareReducer from './Reducers/moviesMiddlewareReducer';
import ModalReducer from './Reducers/ModalReducer';
import cardMiddlewareReducer from './Reducers/cardMiddlewareReducer';
import { rootMidlleware } from './rootMidlleware';


// Union all reducers
const reducers = combineReducers({
    FormReducer,
    moviesMiddlewareReducer,
    ModalReducer,
    cardMiddlewareReducer
});

// Create Store
const store = createStore(reducers, rootMidlleware);

export default store;