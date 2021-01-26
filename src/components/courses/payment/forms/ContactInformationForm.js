import React from 'react';
import { connect } from 'react-redux';
import Alert from './../../../common/alert/Alert';
import {
  addContactInfo,
  createContactInfo
} from '../../../../redux/actions/SignUpActions';
import EmailValidatorService from './services/EmailValidatorService';
import CreateActionsErrorMessages from './constants/CreateActionsErrorMessages';
import ContactInformationFormErrorMessages from './constants/ContactInformationFormErrorMessages';

class BillingInformationForm extends React.Component {
  constructor() {
    super();
    this.emailValidatorService = EmailValidatorService.getInstance();
    this.state = {
      showError: false,
      errorMessage: null,
      nextClickCounter: 0,
      contactEmail: '',
      contactPhoneNumber: ''
    };
  }

  componentDidMount() {
    const storeSignUpInformation = this.props.storeSignUpInformation;
  
    if (storeSignUpInformation.contactInfoFilled) {
      this.setState({
        contactEmail: storeSignUpInformation.contactEmail,
        contactPhoneNumber: storeSignUpInformation.contactPhoneNumber
      });
    }
  }

  componentDidUpdate() {
    const { fetched, error } = this.props.storeCreateContactInformation;

    if (fetched && !error) {
      this.props.nextStep();

    } else if (fetched && error && !this.state.showError) {
      this.setState({
        error: true,
        errorMessage: CreateActionsErrorMessages.CREATION_ERROR
      });
    }
  }

  componentWillUnmount() {
    this.props._addContactInfo({
      contactEmail: this.state.contactEmail,
      contactPhoneNumber: this.state.contactPhoneNumber
    });
  }

  handleNext = (event) => {
    event.preventDefault();

    if (this.isFormValidated()) {
      this.props._createContactInfo({
        contactEmail: this.state.contactEmail,
        contactPhoneNumber: this.state.contactPhoneNumber
      });

    } else {
      this.setState({nextClickCounter: this.state.nextClickCounter + 1});
    }
  };

  isFormValidated = () => {
    if (this.state.contactEmail === "") {
      this.setState({
        showError: true,
        errorMessage: ContactInformationFormErrorMessages.NO_EMAIL
      });

      return false;

    } else if (!this.emailValidatorService.isEmailStripeValid(this.state.contactEmail)) {
      this.setState({
        showError: true,
        errorMessage: ContactInformationFormErrorMessages.INVALID_EMAIL
      });

      return false;

    } else if (this.state.contactPhoneNumber === "") {
      this.setState({
        showError: true,
        errorMessage: ContactInformationFormErrorMessages.NO_PHONE_NUMBER
      });

      return false;
    }

    return true;
  };
  
  render() {
    return (
      <form>
        <Alert showError={this.state.showError} key={this.state.nextClickCounter}>
          {this.state.errorMessage}
        </Alert>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">Kapcsolattartó e-mail cím:</label>
          <input
            type="text"
            className="form-control"
            id="contact-email"
            placeholder="pl.: markmanomolnar@gmail.com"
            onChange={(event) => {
              this.setState({contactEmail: event.target.value.trim()}); }}
            value={this.state.contactEmail} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-phone">Kapcsolattartó telefonszám:</label>
          <input
            type="number"
            className="form-control"
            id="contact-phone"
            placeholder="pl.: 06309324604 vagy 36309324604"
            onChange={(event) => {
              this.setState({contactPhoneNumber: event.target.value.trim()}); }}
            value={this.state.contactPhoneNumber} />
        </div>

        <div className="d-none d-sm-block">
          <button
            className="btn btn-lg btn-success float-right"
            onClick={this.handleNext}
            disabled={this.props.storeCreateContactInformation.fetching}>

            Tovább &gt;&gt;
          </button>
        </div>

        <div className="d-block d-sm-none">
          <button
            className="btn btn-success"
            onClick={this.handleNext}
            disabled={this.props.storeCreateContactInformation.fetching}>

            Tovább &gt;&gt;
          </button>
        </div>
      </form>
    );
  }
}

const selector = (store) => {
  return {
    storeSignUpInformation: store.signUpInformation,
    storeCreateContactInformation: store.createContactInformation
  };
};

const dispatcher = (dispatch) => ({
  _addContactInfo: (...args) => dispatch(addContactInfo(...args)),
  _createContactInfo: (...args) => dispatch(createContactInfo(...args))
});

export default connect(selector, dispatcher)(BillingInformationForm);
