import React from 'react';
import styles from './styles.module.css';
import { closeModal } from '../../redux/Actions/Actions';
import { connect } from 'react-redux';


function modal(props) {
  return (props.isOpen === true) ? <div className="vmodal">
    <div className={styles.modal_overlay} >
      <div className={styles.modal_window} >
        <div style={{ backgroundImage: `url(${props.movieInfo.poster_path})`, width: '90%', height: '90%', margin: '0 auto' }}>
          <div style={{backgroundColor:'rgba(0, 0, 0, 0.5)', width: '100%', height:'100%'}} >
            <div className={styles.modal_header}>
              <span className={styles.modal_title}>{props.movieInfo.title}</span>
              <span className={styles.modal_close} onClick={props.closeModal}>&times;</span>
            </div>
            <div className={styles.modal_body}>
              <span className={styles.modal_genre}>{props.movieInfo.genres}</span>
              <div className={styles.modal_description}>
                {props.movieInfo.overview}
              </div>
              <div className={styles.modal_popularity}>popularity: {props.movieInfo.revenue}</div>
              <div className={styles.modal_budget}>budget: {props.movieInfo.budget}</div>
            </div>
            <div className={styles.modal_footer}>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> : null;

}

const mapStateToProps = (state) => ({
  isOpen: state.ModalReducer.isOpen,
  movieInfo: state.cardReducer.movieInfo
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})

export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(modal)