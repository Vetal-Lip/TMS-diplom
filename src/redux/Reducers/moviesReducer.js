import {
    ITEMS_FETCH_DATA_LOADING,
    ITEMS_FETCH_DATA_SUCCESS,
    ITEMS_FETCH_DATA_ERRORED,
} from '../Actions/Actions';

const initialState = {
    data: {},
    loading: false,
    hasErrored: undefined,

}

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_FETCH_DATA_LOADING:
            return {
                ...state,
                loading: action.payload
            };

        case ITEMS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: { ...state.data, ...action.payload },

            };

        case ITEMS_FETCH_DATA_ERRORED:
            return {
                ...state,
                hasErrored: action.payload
            };

        default:
            return state;
    }
}