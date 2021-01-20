import React from 'react';
import { connect } from 'react-redux';
import PaymentFormContainer from './PaymentFormContainer';
import { createPaymentMethod } from './../../../../redux/actions/SignUpActions';
import FormatNumberService from './services/FormatNumberService';
import ReferenceCreatorService from './services/ReferenceCreatorService';
import FormSuccessMessages from './constants/FormSuccessMessages';
import bankCardPaymentImg from './img/bank-card-payment.webp';
import bankTransferPaymentImg from './img/bank-transfer-payment.webp';
import './css/choose-payment-form.css';

/** TODO: CHANGE INPUT TO NUMBER WHERE ITS POSSIBLE */
class ChoosePaymentForm extends React.Component {
  constructor() {
    super();
    this.formatNumberService = new FormatNumberService();
    this.referenceCreatorService = new ReferenceCreatorService();
    this.state = {
      step: 'choose'
    }
  }

  setStepToDefault = () => {
    this.setState({step: "choose"});
  };

  handleCardClick = () => {
    this.props._createPaymentMethod(
      this.props.createContactInformation.response.objectId,
      {paymentMethod: "card"}
    );
    this.setState({step: "credit-card"});
  };

  handleTransferClick = () => {
    this.props._createPaymentMethod(
      this.props.createContactInformation.response.objectId,
      {paymentMethod: "transfer"}
    );
    this.setState({step: "transfer"});
  }

  // TODO: successful render goes to separate component
  render () {
    if (this.state.step === 'choose') {
      return (
        <div className="text-center">
          <div className="discount-notifier">
            5% kedvezmény jár bankkártyás fizetés esetén!
          </div>

          <button
            className="btn btn-lg btn-light payment-btn mx-1 mb-3"
            onClick={this.handleCardClick}>

            <img src={bankCardPaymentImg} alt="Bankkártyás fizetés" className="d-none d-sm-block" />
            <img src={bankCardPaymentImg} alt="Bankkártyás fizetés" className="d-block d-sm-none payment-btn-mini" />
            <br />
            Kártyával
          </button>

          <button
            className="btn btn-lg btn-light payment-btn mx-1 mb-3"
            onClick={this.handleTransferClick}>

            <img src={bankTransferPaymentImg} alt="Átutalás" className="d-none d-sm-block" />
            <img src={bankTransferPaymentImg} alt="Átutalás" className="d-block d-sm-none payment-btn-mini" />
            <br />
            Átutalással
          </button>

        </div>
      );

    } else if (this.state.step === "credit-card") {
      return <PaymentFormContainer prevStep={this.setStepToDefault} />;

    } else if (this.state.step === "transfer") {
      const {
        chosenCourse,
        signUpInformation
      } = this.props;

      return (
        <div>
          <div className="alert alert-success">
            { FormSuccessMessages.APPLICATION_SUCCESSFUL }
          </div>

          <h6>Fizetendő:</h6>
          <div className="mb-3">
            { this.formatNumberService.addSpacesToNumber(chosenCourse.amount) } Ft
          </div>

          <h6>Számla tulajdonos:</h6>
          <div className="mb-3">Molnár Márk Manó E.V.</div>

          <h6>Számlaszám:</h6>
          <div className="mb-3">12600016-15776202-07894079</div>

          <h6>Közlemény:</h6>
          <div className="mb-3">
            { this.referenceCreatorService.generateReference(signUpInformation.billingName) }
          </div>

          <h6>Szolgáltató (bank):</h6>
          <div>Transferwise</div>
        </div>
      );
    }
  }
};


const selector = (store) => {
  return {
    signUpInformation: store.signUpInformation,
    chosenCourse: store.chosenCourse,
    createApplicationPayment: store.createApplicationPayment,
    createContactInformation: store.createContactInformation
  };
};

const dispatcher = (dispatch) => ({
  _createPaymentMethod: (...args) => dispatch(createPaymentMethod(...args))
});

export default connect(selector, dispatcher)(ChoosePaymentForm);
