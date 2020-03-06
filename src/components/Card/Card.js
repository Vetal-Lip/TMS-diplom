import React from 'react';
import styles from './styles.module.css';
import { connect, useDispatch } from 'react-redux';
import { openModal, getCountMovies } from '../../redux/Actions/Actions';
import { thunkItemMiddleware } from '../../redux/Middleware/cardMiddleware';


function Card(props) {

    let filtredData = [];
    let sortedData = [];

    if (props.state) {
        filtredData = props.state.filter((el) => {
            if (props.searchBy === 'title') {
                return el.title.toLowerCase().includes(props.searchValue.toLowerCase())
            } else {
                if (props.searchBy === 'genre') {
                    return el.genres.some((el) => el.toLowerCase().includes(props.searchValue.toLowerCase()))
                }
            }
        })

    }

    let countMovies = filtredData.length;

    const getCount = useDispatch();
    getCount(getCountMovies(countMovies));


    sortedData = [...filtredData].sort((a, b) => {
        if (props.sortBy === 'rating') {
            return b.vote_average > a.vote_average ? 1 : -1
        } else {
            if (props.sortBy === 'date') {
                return b.release_date > a.release_date ? 1 : -1
            }
        }
    })

    const onClickCardMovie = (event) => {
        const idMovie = event.currentTarget.getAttribute('id');
        props.openModal();
        props.getMovieInfo(idMovie);

    }

    return (props.state) ? sortedData.map((el, i) => {
        return <div key={el.id} id={`${el.id}`} className={styles.card_wrapper} onClick={onClickCardMovie}>
            <div className={styles.card_item}>
                <img className={styles.img_card} src={el.poster_path} alt={"Movies"} />
            </div>
            <div className={styles.content_wrapper}>
                <div>
                    <div>{el.title}</div>
                    <div>{el.genres.join(" & ")}</div>
                </div>
                <div className={styles.date}>{el.release_date.split("-", 1)}</div>
            </div>
        </div>
    }) : null;

}

const mapStateToProps = (state) => {

    return {
        state: state.moviesMiddlewareReducer.data.data,
        searchValue: state.FormReducer.searchValue,
        searchBy: state.FormReducer.searchBy,
        sortBy: state.FormReducer.sortBy

    }
};

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal()),
    getMovieInfo: (id) => dispatch(thunkItemMiddleware(id)),
});

export const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card)

