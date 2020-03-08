import { createStore, combineReducers } from "redux";
import FormReducer from './Reducers/FormReducer';
import moviesReducer from './Reducers/moviesReducer';
import ModalReducer from './Reducers/ModalReducer';
import cardReducer from './Reducers/cardReducer';
import { rootMidlleware } from './rootMidlleware';


// Union all reducers
const reducers = combineReducers({
    FormReducer,
    moviesReducer,
    ModalReducer,
    cardReducer
});

// Create Store
const store = createStore(reducers, rootMidlleware);

export default store;