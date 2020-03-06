import {
    movieIsLoading,
    movieFetchDataSuccess,
    movieHasErrored,
} from '../Actions/Actions';

export function thunkItemMiddleware(id) {
    return (dispatch) => {
        dispatch(movieIsLoading(true));

        fetch(`https://reactjs-cdp.herokuapp.com/movies/` + id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(movieIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(data => dispatch(movieFetchDataSuccess(data)))
            .catch(() => dispatch(movieHasErrored()))

    }
}