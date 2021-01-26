import React from 'react';
import { connect } from 'react-redux';
import Modal from '../../common/modal/Modal';
import { dropCreateResponses } from '../../../redux/actions/SignUpActions';
import { closeModal } from '../../../redux/actions/ModalStateActions';
import SignUpSteps from './forms/constants/SignUpSteps';
import ModalErrorMessages from './constants/ModalErrorMessages';

// TODO: Write documentation about new structure
class PaymentModal extends React.Component {
  constructor() {
    super();
    this.state = {
      signUpStep: 0
    };
    this.increaseStep = this.increaseStep.bind(this);
    this.decreaseStep = this.decreaseStep.bind(this);
  }

  componentDidMount() {
    const { chosenCourse } = this.props;

    if (!chosenCourse.currency || !chosenCourse.amount || !chosenCourse.name) {
      console.error(ModalErrorMessages.MODAL_WITHOUT_COURSE);
    }
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
    const modalTitle = (this.state.signUpStep + 1) + " / " + SignUpSteps.length + " lépés - " + currentFormTitle;

    return <Modal
            closeModal={this.closeModal}
            modalStyle={modalStyle}
            title={modalTitle}
            body={<CurrentForm nextStep={this.increaseStep} prevStep={this.decreaseStep} />} />;
  }
}

const selector = (store) => {
  return {
    modalState: store.modalState,
    chosenCourse: store.chosenCourse
  };
};

const dispatcher = (dispatch) => ({
  _closeModal: (...args) => dispatch(closeModal(...args)),
  _dropCreateResponses: (...args) => dispatch(dropCreateResponses(...args))
});

export default connect(selector, dispatcher)(PaymentModal);
