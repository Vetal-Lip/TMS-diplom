import {
    movieFetchDataLoading,
    movieFetchDataSuccess,
    movieFetchDataErrored,
} from '../Actions/Actions';

export function thunkItemMiddleware(id) {
    return (dispatch) => {
        dispatch(movieFetchDataLoading(true));

        fetch(`https://reactjs-cdp.herokuapp.com/movies/` + id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(movieFetchDataLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(data => dispatch(movieFetchDataSuccess(data)))
            .catch(() => dispatch(movieFetchDataErrored()))

    }
}