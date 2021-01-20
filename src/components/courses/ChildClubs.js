import React from 'react';
import { connect } from 'react-redux';
import Menu from '../common/menu/Menu';
import Header from '../common/header/Header';
import ChildClubList from './ChildClubList';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';
import Modal from './modal/Modal';

// TODO: delete useless connect
// TODO: delete modalState.opened check
class ChildClubs extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Header>
          <h1 className={"h1 text-white header-background-transparent text-uppercase"}>
            Gyerek szakköreink
          </h1>
          <h2 className={"h4 text-white header-background-transparent text-uppercase"}>
            Szívesen megtanulnál a suli mellett programozni? <br/>
            Akkor próbáld ki csapatban, a saját ötleteden dolgozva!
          </h2>
        </Header>
        <ChildClubList />
        <Facebook />
        <Footer />
        { this.props.modalState.opened ? <Modal /> : null }
      </div>
    );
  }
}

const selector = (store) => {
  return {
    modalState: store.modalState
  };
};

export default connect(selector)(ChildClubs);
