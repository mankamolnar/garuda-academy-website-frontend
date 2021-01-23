import React from 'react';
import { connect } from 'react-redux';
import Alert from './../../../common/alert/Alert';
import {
  addBillingInfo,
  createRestApplicationInfo
} from './../../../../redux/actions/SignUpActions';
import CreateActionsErrorMessages from './constants/CreateActionsErrorMessages';
import BillingInformationFormErrorMessages
  from './constants/BillingInformationFormErrorMessages';
import './css/billing-information-form.css';

class BillingInformationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      errorMessage: null,
      nextClickCounter: 0,
      billingName: '',
      billingZip: '',
      billingCity: '',
      billingAddress: ''
    };
  }

  componentDidMount() {
    const { storeSignUpInformation } = this.props;

    if (storeSignUpInformation.billingInfoFilled) {
      this.setState({
        billingName: storeSignUpInformation.billingName,
        billingZip: storeSignUpInformation.billingZip,
        billingCity: storeSignUpInformation.billingCity,
        billingAddress: storeSignUpInformation.billingAddress
      });
    }
  }

  componentDidUpdate() {
    const { fetched, error } = this.props.storeCreateRestApplicationInfo;

    if (fetched && !error) {
      this.props.nextStep();

    } else if (fetched && error && !this.state.showError) {
      this.setState({
        showError: true,
        errorMessage: CreateActionsErrorMessages.CREATION_ERROR
      });
    }
  }

  componentWillUnmount() {
    this.props._addBillingInfo({
      billingName: this.state.billingName,
      billingZip: this.state.billingZip,
      billingCity: this.state.billingCity,
      billingAddress: this.state.billingAddress
    });
  }

  handleNext = (event) => {
    event.preventDefault();

    if (this.isFormValidated()) {
      const {
        storeSignUpInformation,
        storeCreateContactInformation
      } = this.props;

      this.props._createRestApplicationInfo(
        storeCreateContactInformation.response.objectId,
        {
          participantName: storeSignUpInformation.participantName,
          participantBirthdate: storeSignUpInformation.participantBirthdate,
          billingCity: this.state.billingCity,
          billingZip: this.state.billingZip,
          billingName: this.state.billingName,
          billingAddress: this.state.billingAddress,
          class: this.props.chosenCourse.name
        });

    } else {
      this.setState({nextClickCounter: this.state.nextClickCounter + 1});
    }
  };

  handlePrev = (event) => {
    event.preventDefault();

    this.props.prevStep();
  }

  isFormValidated = () => {
    if (this.state.billingCity.trim() === "") {
      this.setState({
        showError: true,
        errorMessage: BillingInformationFormErrorMessages.NO_BILING_CITY
      });

      return false;

    } else if (this.state.billingZip.trim() === "") {
      this.setState({
        showError: true,
        errorMessage: BillingInformationFormErrorMessages.NO_BILLING_ZIP
      });

      return false;

    } else if (this.state.billingName.trim() === "") {
      this.setState({
        showError: true,
        errorMessage: BillingInformationFormErrorMessages.NO_BILLING_NAME
      });

      return false;

    } else if (this.state.billingAddress.trim() === "") {
      this.setState({
        showError: true,
        errorMessage: BillingInformationFormErrorMessages.NO_BILLING_ADDRESS
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
          <label className="form-label" htmlFor="invoice-name">Számlázási név:</label>
          <input
            type="text"
            className="form-control"
            id="invoice-name"
            placeholder="pl.: Molnár Viktor"
            onChange={(event) => {
              this.setState({billingName: event.target.value}); }}
            value={this.state.billingName} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="invoice-zip-code">Irányítószám és város:</label>
          <div>
            <input
              type="text"
              className="form-control"
              id="invoice-zip-code"
              placeholder="pl.: 1025"
              onChange={(event) => {
                this.setState({billingZip: event.target.value}); }}
              value={this.state.billingZip} />
            <input
              type="text"
              className="form-control"
              id="invoice-city"
              placeholder="pl.: Budapest"
              onChange={(event) => {
                this.setState({billingCity: event.target.value}); }}
              value={this.state.billingCity} />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="invoice-address-line-1">Utca és házszám:</label>
          <input
            type="text"
            className="form-control"
            id="invoice-address-line-1"
            placeholder="pl. Fa utca 13/B I. em. 3. ajtó"
            onChange={(event) => {
              this.setState({billingAddress: event.target.value}); }}
            value={this.state.billingAddress} />
        </div>

        <div className="d-none d-sm-block">
          <button
            className="btn btn-lg btn-success float-right"
            onClick={this.handleNext}
            disabled={this.props.storeCreateRestApplicationInfo.fetching}>

            Tovább &gt;&gt;
          </button>
          <button className="btn btn-lg btn-info float-left" onClick={this.handlePrev}>&lt;&lt; Vissza</button>
        </div>

        <div className="d-block d-sm-none">
          <button
            className={"btn btn-success mb-3"}
            onClick={this.handleNext}
            disabled={this.props.storeCreateRestApplicationInfo.fetching}>

            Tovább &gt;&gt;
          </button>
          <button className="btn btn-info" onClick={this.handlePrev}>&lt;&lt; Vissza</button>
        </div>
      </form>
    );
  }
}

const selector = (store) => {
  return {
    storeSignUpInformation: store.signUpInformation,
    storeCreateRestApplicationInfo: store.createRestApplicationInfo,
    storeCreateContactInformation: store.createContactInformation,
    chosenCourse: store.chosenCourse
  };
};

const dispatcher = (dispatch) => ({
  _addBillingInfo: (...args) => dispatch(addBillingInfo(...args)),
  _createRestApplicationInfo: (...args) => dispatch(createRestApplicationInfo(...args))
});

export default connect(selector, dispatcher)(BillingInformationForm);
