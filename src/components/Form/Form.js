import React from 'react';
import styles from './styles.module.css';
import { connect } from 'react-redux';
import { thunkMoviesMiddleware } from '../../redux/Middleware/moviesMiddleware';
import { getInputFieldValue, onClickSearchButton, getSearchBy, getSortByDate, getSortByRaiting } from '../../redux/Actions/Actions';


function Form(props) {

    const onSubmitForm = (event) => event.preventDefault()

    const getInputValue = (event) => props.onChange(event.target.value)

    const getSearchBy = (event) => props.getSearchBy(event.currentTarget.getAttribute('id'))

    const onClickReleaseDate = (event) => props.onClickReleaseDate(event.currentTarget.getAttribute('id'))

    const onClickRaiting = (event) => props.onClickRaiting(event.currentTarget.getAttribute('id'))

    const onClickSearchButton = () => {
        props.getSearchValue();
        props.getFetchMovies(`https://reactjs-cdp.herokuapp.com/movies`)

    }

    return (
            <div>
                <form onSubmit={onSubmitForm}>
                    <input className={styles.input} value={props.inputValue} onChange={getInputValue} placeholder={(props.searchBy === 'title') ? 'enter film name' : 'enter jenre name'} />
                    <div className={styles.search_wrapper}>
                        <div className={styles.searchby_wrapper}>
                            <p className={styles.searchby_title}>search by</p>
                            <div id='title' onClick={getSearchBy} className={styles.searchby_item} style={{ background: `${props.searchBy === 'title' ? `rgb(221, 4, 4)` : ''}` }}>title</div>
                            <div id='genre' onClick={getSearchBy} className={styles.searchby_item} style={{ background: `${props.searchBy === 'genre' ? `rgb(221, 4, 4)` : ''}` }}>genre</div>
                        </div>
                        <div><button className={styles.button} onClick={onClickSearchButton} disabled={!props.inputValue ? 'disabled' : ''} >{props.loading ? "Loading..." : "Search"}</button></div>
                    </div>
                </form>
                <div className={styles.wrapper}>
                    <div><span style={{ fontWeight: 'bold' }}>{props.countMovies}</span> movies found</div>
                    <div className={styles.sortby_wrapper}>
                        <div className={styles.sortby}>sort by:</div>
                        <div id='date' className={styles.sortby_item} onClick={onClickReleaseDate} style={{ color: `${props.sortBy === 'date' ? `rgb(221, 4, 4)` : ` `}` }} >release date</div>
                        <div id='rating' className={styles.sortby_item} onClick={onClickRaiting} style={{ color: `${props.sortBy === 'rating' ? `rgb(221, 4, 4)` : ` `}` }} >rating</div>
                    </div>
                </div>
            </div>
        )
}
   

const mapStateToProps = (state) => ({
    state: state.moviesMiddlewareReducer.data,
    inputValue: state.FormReducer.inputValue,
    searchBy: state.FormReducer.searchBy,
    loading: state.FormReducer.loading,
    sortBy: state.FormReducer.sortBy,
    countMovies: state.FormReducer.countMovies,
    hasErrored: state.moviesMiddlewareReducer.hasErrored
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (value) => dispatch(getInputFieldValue(value)),
    getFetchMovies: (url) => dispatch(thunkMoviesMiddleware(url)),
    getSearchValue: () => dispatch(onClickSearchButton()),
    getSearchBy: (id) => dispatch(getSearchBy(id)),

    onClickReleaseDate: (id) => dispatch(getSortByDate(id)),
    onClickRaiting: (id) => dispatch(getSortByRaiting(id)),
});

export const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

