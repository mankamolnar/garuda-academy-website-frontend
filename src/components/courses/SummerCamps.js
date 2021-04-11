import React from 'react';
import { connect } from 'react-redux';
import Menu from '../common/menu/Menu';
import Header from '../common/header/Header';
import PaymentModal from './payment/PaymentModal';
import SummerCampList from './SummerCampList';
import Footer from '../common/footer/Footer';
import Facebook from '../common/facebook/Facebook';

class SummerCamps extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Header>
          <h1 className={"h1 text-white header-background-transparent text-uppercase"}>Online nyári táborok</h1>
          <h2 className={"h4 text-white header-background-transparent text-uppercase"}>
            Tanuld meg elkészíteni saját játékaidat és animációidat a Scratch képzéssel! <br /><br />Vagy ha valami komolyabbra vágysz próbáld ki Python vagy PyGame kurzusainkat!
          </h2>
        </Header>
        <SummerCampList />
        <Facebook />
        <Footer />
        { this.props.modalState.opened ? <PaymentModal /> : null }
      </div>
    );
  }
}

const selector = (store) => {
  return {
    modalState: store.modalState
  };
};

export default connect(selector)(SummerCamps);