import {
    MOVIE_IS_LOADING,
    MOVIE_FETCH_DATA_SUCCESS,
    MOVIE_HAS_ERRORED
} from '../Actions/Actions';

const initialState = {
    movieInfo: {},
    loading: false
}

export default function cardMiddlewareReducer(state = initialState, action) {
    switch (action.type) {
        case MOVIE_IS_LOADING:
            return {
                ...state,
                loading: action.payload
            };

        case MOVIE_FETCH_DATA_SUCCESS:
            return {
                ...state,
                movieInfo: { ...state.movieInfo, ...action.payload },

            };

        case MOVIE_HAS_ERRORED:
            return {
                ...state,
            };

        default:
            return state;
    }
}