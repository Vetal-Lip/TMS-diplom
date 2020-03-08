import React, { Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { FormContainer } from "./components/Form/Form";
import { CardContainer } from './components/Card/Card';
import { ModalContainer } from './components/Modal/Modal';

function App(props) {

  console.log(props.hasErrored)
  if (props.hasErrored) {
    return (
      <div className="error-container">{props.hasErrored}</div>
    )
  } else {
    return (<Fragment>
      <ModalContainer />

      <div className="container">
        <div className="container-bg">
          <div className="container-wrapper ">
            <h1 className="form-title">find you movie</h1>
            <FormContainer />
          </div>
        </div>

        <div className="card-wrapper">
          <CardContainer />
        </div>

        <div className="footer">
          <p className="footer_content">&copy; Lipnitski Vitali</p>
        </div>
      </div>
    </Fragment>
    );
  }

}
const mapStateToProps = (state) => ({
  hasErrored: state.moviesReducer.hasErrored
})

const mapDispatchToProps = (dispatch) => ({

});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
