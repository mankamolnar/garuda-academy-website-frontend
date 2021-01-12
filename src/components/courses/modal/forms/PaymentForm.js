import React from 'react';
import { connect } from 'react-redux';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js';
import Alert from './../../../common/alert/Alert';
import { createPaymentIntent } from './../../../../redux/actions/StripePaymentActions';
import { createPaymentFailure } from './../../../../redux/actions/PaymentFailureActions';
import FormatNumberService from './services/FormatNumberService';
import ConfirmCardPaymentDataFactory from './factories/ConfirmCardPaymentDataFactory';
import CardPaymentErrorMessages from './constants/CardPaymentErrorMessages';
import CardPaymentErrorCodes from './constants/CardPaymentErrorCodes';
import FormSuccessMessages from './constants/FormSuccessMessages';
import cardsImg from './img/cards.webp';
import stripeImg from './img/stripe-logo.webp';
import './css/payment-form.css';

class PaymentForm extends React.Component {
  constructor() {
    super();
    this.confirmCardPaymentDataFactory = new ConfirmCardPaymentDataFactory();
    this.formatNumberService = new FormatNumberService();
    this.state = {
      error: undefined,
      loading: false,
      payClickCounter: 0,
      paymentSuccess: false,
      paymentSuccessWithWarning: false
    }
  }

  componentDidMount() {
    const paymentOptions = {
      currency: this.props.chosenCourse.currency,
      amount: this.props.chosenCourse.amount * 95
    };

    this.props._createPaymentIntent(paymentOptions);
  }

  componentDidUpdate() {
    if (this.state.error && this.state.loading) {
      this.setState({
        loading: false
      });
    }
  }

  handleSubmit = async () => {
    const {
      stripe,
      elements,
      signUpInformation
    } = this.props;

    this.setState({
      loading: true,
      error: undefined,
      payClickCounter: this.state.payClickCounter + 1
    });

    stripe.confirmCardPayment(
      this.props.paymentIntent.response.secret,
      this.confirmCardPaymentDataFactory.newData(elements, signUpInformation, CardNumberElement)
    ).then(this.handleStripeResult);
  };

  //TODO: TEST INVALID EMAILRE
  handleStripeResult = (result) => {
    if (result.paymentIntent !== undefined) {
      if (result.paymentIntent.status === "succeeded") {
        this.setState({paymentSuccess: true});

      } else {
        this.props._createPaymentFailure(
          this.props.createContactInformation.response.objectId,
          JSON.stringify(result)
        );
        this.setState({paymentSuccessWithWarning: true});

      }
    } else {
      const { error } = result;
      this.handleError(error);
    }
  }

  handleError = (error) => {
    if (error !== undefined) {
      if (error.code === CardPaymentErrorCodes.CARD_DECLINED) {
        if (CardPaymentErrorMessages[error.decline_code] !== undefined) {
          this.setState({error: CardPaymentErrorMessages[error.decline_code]});

        } else {
          this.setState({error: error.message});

        }
      } else if (CardPaymentErrorMessages[error.code] !== undefined) {
        this.setState({error: CardPaymentErrorMessages[error.code]});

      } else {
        this.setState({error: error.message});

      }
    }
  };

  render() {
    const { stripe } = this.props;
    const discountedPrice = this.formatNumberService
      .calculatePercentage(this.props.chosenCourse.amount, 95);

    if (this.state.paymentSuccess) {
      return (
        <div className="alert alert-success mb-0">
          { FormSuccessMessages.APPLICATION_SUCCESSFUL }
        </div>
      );

    } else if (this.state.paymentSuccessWithWarning) {
      return (
        <div className="alert alert-success mb-0">
          { FormSuccessMessages.APPLICATION_SUCCESSFUL_WITH_WARNING }
        </div>
      );
    }

    return (
      <React.Fragment>
        <Alert showError={!!this.state.error} key={this.state.payClickCounter}>
          {this.state.error}
        </Alert>

        <form>
          <div className="text-center no-iphone-5">
            <img src={stripeImg} id="stripe-logo" alt="Powered by Stripe" />
          </div>
  
          <div className="form-group">
            <span className="form-label">Kártyaszám:</span>
            <CardNumberElement />
          </div>

          <div className="form-group">
            <span className="form-label">Lejárati dátum (hó/év):</span>
            <CardExpiryElement />
          </div>

          <div className="form-group">
            <span className="form-label">3 jegyű kód a kártya hátoldalán:</span>
            <CardCvcElement />
          </div>
        </form>

        <div className="d-none d-sm-block pb-3 border-bottom">
          <button className="btn btn-lg btn-success float-right" disabled={!stripe || this.state.loading} onClick={this.handleSubmit}>
            Fizetés ({this.formatNumberService.addSpacesToNumber(discountedPrice)} Ft)
          </button>
          <button className="btn btn-lg btn-info" onClick={this.props.prevStep}>
            &lt;&lt; Vissza
          </button>
        </div>

        <div className="d-block d-sm-none">
          <button className="btn btn-success mb-3" disabled={!stripe || this.state.loading} onClick={this.handleSubmit}>
            Fizetés 
            <br />
            ({this.formatNumberService.addSpacesToNumber(discountedPrice)} Ft)
          </button>
          <button className="btn btn-info" onClick={this.props.prevStep}>
            &lt;&lt; Vissza
          </button>
        </div>

        <div className="text-center no-iphone-5">
          <img src={cardsImg} id="stripe-cards" alt="Accepted cards visa american express mastercard maestro" />
        </div>
      </React.Fragment>
    );
  }
}

const selector = (store) => {
  return {
    createContactInformation: store.createContactInformation,
    chosenCourse: store.chosenCourse,
    signUpInformation: store.signUpInformation,
    paymentIntent: store.paymentIntent
  };
};

const dispatcher = (dispatch) => ({
  _createPaymentIntent: (...args) => dispatch(createPaymentIntent(...args)),
  _createPaymentFailure: (...args) => dispatch(createPaymentFailure(...args))
});

export default connect(selector, dispatcher)(PaymentForm);
