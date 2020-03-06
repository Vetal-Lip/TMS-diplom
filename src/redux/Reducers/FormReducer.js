import {
    GET_SORT_BY_RATING, GET_SORT_BY_DATE, GET_SEARCH_BY,
    GET_INPUT_FIELD_VALUE, ON_CLICK_SEARCH_BUTTON,
    GET_COUNT_MOVIES
} from '../Actions/Actions'

const initialState = {
    inputValue: '',
    searchValue: '',
    searchBy: 'title',
    sortBy: ' ',
    countMovies: 0,
}

export default function FormReducer(state = initialState, action) {
    switch (action.type) {
        case GET_INPUT_FIELD_VALUE:
            return {
                ...state,
                inputValue: action.payload
            }

        case ON_CLICK_SEARCH_BUTTON:
            return {
                ...state,
                inputValue: ' ',
                searchValue: state.inputValue,
            }


        case GET_SEARCH_BY:
            return {
                ...state,
                searchBy: action.payload
            }

        case GET_SORT_BY_DATE:
            return {
                ...state,
                sortBy: action.payload,
            }

        case GET_SORT_BY_RATING:
            return {
                ...state,
                sortBy: action.payload,
            }
        case GET_COUNT_MOVIES:
            return {
                ...state,
                countMovies: action.payload
            }

        default: return state;
    }

} 