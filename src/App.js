import React, { Fragment } from 'react';
import './App.css';
import { FormContainer } from "./components/Form/Form";
import { CardContainer } from './components/Card/Card';
import { ModalContainer } from './components/Modal/Modal';

function App() {
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

export default App;
