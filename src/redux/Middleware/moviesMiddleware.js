import {
    itemsIsLoading,
    itemsFetchDataSuccess,
    itemsHasErrored
} from '../Actions/Actions';

export function thunkMoviesMiddleware(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(data => dispatch(itemsFetchDataSuccess(data)))
            .catch((error) => dispatch(itemsHasErrored('ERROR: ' + error.name + " " + error.message)))

    }
}