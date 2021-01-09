import React from 'react';
import { connect } from 'react-redux';
import Alert from './../../../common/alert/Alert';
import { addParticipantInfo } from './../../../../redux/actions/SignUpActions';
import ParticipantInformationFormErrorMessages
  from './constants/ParticipantInformationFormErrorMessages';
import './css/participant-form.css';

class ParticipantForm extends React.Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      errorMessage: null,
      nextClickCounter: 0,
      participantName: '',
      participantBirthdateYear: '',
      participantBirthdateMonth: '',
      participantBirthdateDay: '',
    };
  }

  componentDidMount() {
    const { signUpInformation } = this.props;

    if (signUpInformation.participantInfoFilled) {
      const birthday = signUpInformation.participantBirthdate.split("-");

      this.setState({
        participantName: signUpInformation.participantName,
        participantBirthdateYear: birthday[0],
        participantBirthdateMonth: birthday[1],
        participantBirthdateDay: birthday[2],
      });
    }
  }

  componentWillUnmount() {
    const birthdate = this.state.participantBirthdateYear + "-"
      + this.state.participantBirthdateMonth + "-"
      + this.state.participantBirthdateDay;

    this.props._addParticipantInfo({
      participantName: this.state.participantName,
      participantBirthdate: birthdate,
    });
  }

  handleNext = (event) => {
    event.preventDefault();

    if (this.isFormValidated()) {
      this.props.nextStep();

    } else {
      this.setState({nextClickCounter: this.state.nextClickCounter + 1});
    }
  };

  isFormValidated = () => {
    if (this.state.participantName.trim() === "") {
      this.setState({
        showError: true,
        errorMessage: ParticipantInformationFormErrorMessages.NO_PARTICIPANT_NAME
      });

      return false;

    } else if (this.state.participantBirthdateYear.trim() === "") {
      this.setState({
        showError: true,
        errorMessage: ParticipantInformationFormErrorMessages.NO_BIRTH_YEAR
      });

      return false;

    } else if (this.state.participantBirthdateMonth.trim() === "") {
      this.setState({
        showError: true,
        errorMessage: ParticipantInformationFormErrorMessages.NO_BIRTH_MONTH
      });

      return false;

    } else if (this.state.participantBirthdateDay.trim() === "") {
      this.setState({
        showError: true,
        errorMessage: ParticipantInformationFormErrorMessages.NO_BIRTH_DAY
      });

      return false;
    }

    return true;
  }

  render() {
    return (
      <form>
        <Alert showError={this.state.showError} key={this.state.nextClickCounter}>
          {this.state.errorMessage}
        </Alert>

        <div className="form-group">
          <label className="form-label" htmlFor="participant-name-field">
            Résztvevő neve:
          </label>
          <input
            type="text"
            className="form-control"
            id="participant-name-field"
            placeholder="pl.: Molnár Dominik"
            onChange={(event) => {
              this.setState({participantName: event.target.value}); }}
            value={this.state.participantName} />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="participant-birthday-field-year">
            Résztvevő születési ideje:
          </label>
          <div className="text-center">
            <input
              type="text"
              className="form-control form-date-input float-left"
              id="participant-birthday-field-year"
              placeholder="év (pl: 1992)"
              onChange={(event) => {
                this.setState({participantBirthdateYear: event.target.value}); }}
              value={this.state.participantBirthdateYear} />
            <input
              type="text"
              className="form-control form-date-input"
              id="participant-birtday-field-month"
              placeholder="hó (pl: 10)"
              onChange={(event) => {
                this.setState({participantBirthdateMonth: event.target.value}); }}
              value={this.state.participantBirthdateMonth} />
            <input
              type="text"
              className="form-control form-date-input float-right"
              id="participant-birtday-field-day"
              placeholder="nap (pl: 02)"
              onChange={(event) => {
                this.setState({participantBirthdateDay: event.target.value}); }}
              value={this.state.participantBirthdateDay} />
          </div>
        </div>

        <div className="d-none d-sm-block">
          <button className="btn btn-lg btn-success float-right" onClick={this.handleNext}>Tovább &gt;&gt;</button>
        </div>

        <div className="d-block d-sm-none">
          <button className={"btn btn-success"} onClick={this.handleNext}>Tovább &gt;&gt;</button>
        </div>

      </form>
    );
  }
}

const selector = (store) => {
  return {
    signUpInformation: store.signUpInformation
  };
};

const dispatcher = (dispatch) => ({
  _addParticipantInfo: (...args) => dispatch(addParticipantInfo(...args))
});

export default connect(selector, dispatcher)(ParticipantForm);
