import React from 'react';
import { connect } from 'react-redux';
import { dropCreateResponses } from '../../../redux/actions/SignUpActions';
import { closeModal } from '../../../redux/actions/ModalStateActions';
import SignUpSteps from './forms/constants/SignUpSteps';
import closeButton from './img/close.webp';
import './css/modal.css';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      signUpStep: 0
    };
    this.increaseStep = this.increaseStep.bind(this);
    this.decreaseStep = this.decreaseStep.bind(this);
  }

  increaseStep() {
    this.setState({signUpStep: this.state.signUpStep + 1});
  }

  decreaseStep() {
    this.setState({signUpStep: this.state.signUpStep - 1});
  }

  closeModal = (event) => {
    if (event.target.className.indexOf("modal-closer") !== -1) {
      this.props._dropCreateResponses();
      this.props._closeModal();
    }
  };

  render() {
    const CurrentForm = SignUpSteps[this.state.signUpStep].form;
    const modalStyle = this.props.modalState.opened ? "" : "d-none";
    const currentFormTitle = SignUpSteps[this.state.signUpStep].title;

    return (
      <div
        className={"bg-dark-transparent garuda-modal " + modalStyle}
        onClick={this.closeModal}>

        <div className="row modal-row">
          <div className="col-md-2 modal-closer"></div>
          <div className="col-md-8 modal-closer">

            <div className="card garuda-card vertical-center modal-card ">
              <div className="card-header position-relative">
                <div id="garuda-modal-title">
                  <h4 className="mb-0">
                    {this.state.signUpStep + 1} / {SignUpSteps.length} lépés - {currentFormTitle}
                  </h4>
                </div>
                <div id="modal-close-btn-container">
                  <img src={closeButton} className="modal-close-btn vertical-center modal-closer" alt="close-modal" />
                </div>
              </div>
              <div className="card-body">
                <CurrentForm nextStep={this.increaseStep} prevStep={this.decreaseStep} />
              </div>
            </div>

          </div>
          <div className="col-md-2 modal-closer"></div>
        </div>

      </div>
    );
  }
}

const selector = (store) => {
  return {
    modalState: store.modalState
  };
};

const dispatcher = (dispatch) => ({
  _closeModal: (...args) => dispatch(closeModal(...args)),
  _dropCreateResponses: (...args) => dispatch(dropCreateResponses(...args))
});

export default connect(selector, dispatcher)(Modal);
