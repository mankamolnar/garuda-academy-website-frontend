import React from 'react';

export default class Alert extends React.Component {
  constructor() {
    super();
    this.state = {
      showError: true
    };
  }

  handleErrorClose = () => {
    this.setState({showError: false});
  };

  render() {
    return this.state.showError && this.props.showError ? (
      <div className="alert alert-danger ">
        { this.props.children }
        &nbsp;
        <span className="btn-link fake-link" onClick={this.handleErrorClose}>Üzenet elrejtése</span>
      </div>
    ) : null;
  }
}
