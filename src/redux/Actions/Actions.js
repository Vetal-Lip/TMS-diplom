// create Action for Input and Form
export const GET_INPUT_FIELD_VALUE = 'GET_INPUT_FIELD_VALUE';
export const ON_CLICK_SEARCH_BUTTON = 'ON_CLICK_SEARCH_BUTTON';
export const GET_SEARCH_BY= "GET_SEARCH_BY";
export const GET_SORT_BY_DATE = "GET_SORT_BY_DATE";
export const GET_SORT_BY_RATING = "GET_SORT_BY_RATING";

export const getInputFieldValue = (payload) =>({type: GET_INPUT_FIELD_VALUE, payload });
export const onClickSearchButton = () => ({type: ON_CLICK_SEARCH_BUTTON});
export const getSearchBy = (payload) => ({type: GET_SEARCH_BY, payload});
export const getSortByDate = (payload) => ({type: GET_SORT_BY_DATE, payload})
export const getSortByRaiting = (payload) => ({type: GET_SORT_BY_RATING, payload})


// create Action for Fetch (middleWare/movie)
export const ITEMS_FETCH_DATA_LOADING = 'ITEMS_FETCH_DATA_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';
export const ITEMS_FETCH_DATA_ERRORED = 'ITEMS_FETCH_DATA_ERRORED';

export const itemsFetchDataLoading = (payload) => ({type: ITEMS_FETCH_DATA_LOADING, payload});
export const itemsFetchDataSuccess = (payload) => ({type: ITEMS_FETCH_DATA_SUCCESS, payload });
export const itemsFetchDataErrored = (payload) => ({type: ITEMS_FETCH_DATA_ERRORED, payload });


// create Action for ModalWindow
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL'; 

export const openModal =() => ({type: OPEN_MODAL });
export const closeModal =() => ({type: CLOSE_MODAL });


// create Action for Fetch (middleWare/movie/{id})
export const MOVIE_FETCH_DATA_LOADING = 'MOVIE_FETCH_DATA_LOADING';
export const MOVIE_FETCH_DATA_SUCCESS = 'MOVIE_FETCH_DATA_SUCCESS';
export const MOVIE_FETCH_DATA_ERRORED = 'MOVIE_FETCH_DATA_ERRORED';

export const movieFetchDataLoading = (payload) => ({type: MOVIE_FETCH_DATA_LOADING, payload});
export const movieFetchDataSuccess = (payload) => ({type: MOVIE_FETCH_DATA_SUCCESS, payload });
export const movieFetchDataErrored = () => ({type: MOVIE_FETCH_DATA_ERRORED });


// create Action for CountMovies
export const GET_COUNT_MOVIES = 'GET_COUNT_MOVIES';

export const getCountMovies = (payload) => ({type: GET_COUNT_MOVIES, payload});
