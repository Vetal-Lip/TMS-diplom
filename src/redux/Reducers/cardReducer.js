import {
    MOVIE_FETCH_DATA_LOADING,
    MOVIE_FETCH_DATA_SUCCESS,
    MOVIE_FETCH_DATA_ERRORED
} from '../Actions/Actions';

const initialState = {
    movieInfo: {},
    loading: false
}

export default function cardReducer(state = initialState, action) {
    switch (action.type) {
        case MOVIE_FETCH_DATA_LOADING:
            return {
                ...state,
                loading: action.payload
            };

        case MOVIE_FETCH_DATA_SUCCESS:
            return {
                ...state,
                movieInfo: { ...state.movieInfo, ...action.payload },

            };

        case MOVIE_FETCH_DATA_ERRORED:
            return {
                ...state,
            };

        default:
            return state;
    }
}