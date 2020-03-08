import {
    itemsFetchDataLoading,
    itemsFetchDataSuccess,
    itemsFetchDataErrored,
} from '../Actions/Actions';

export function thunkMoviesMiddleware(url) {
    return (dispatch) => {
        dispatch(itemsFetchDataLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(itemsFetchDataLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(data => dispatch(itemsFetchDataSuccess(data)))
            .catch((error) => dispatch(itemsFetchDataErrored('ERROR: ' + error.name + " " + error.message)))

    }
}