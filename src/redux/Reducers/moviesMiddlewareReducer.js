import {
    ITEMS_IS_LOADING,
    ITEMS_FETCH_DATA_SUCCESS,
    ITEMS_HAS_ERRORED
} from '../Actions/Actions';

const initialState = {
    data: {},
    loading: false,
    hasErrored: undefined,
    
}

export default function moviesMiddlewareReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_IS_LOADING:
            return {
                ...state,
                loading: action.payload
            };

        case ITEMS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: { ...state.data, ...action.payload },

            };

        case ITEMS_HAS_ERRORED:
            return {
                ...state,
                hasErrored: action.payload
            };

        default:
            return state;
    }
}