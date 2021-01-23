import React from 'react';
import Header from '../common/header/Header';
import Menu from '../common/menu/Menu';
import HeaderButtons from './HeaderButtons';
import Boxes from './Boxes';
import Footer from '../common/footer/Footer';
import Videos from './Videos';
import Facebook from '../common/facebook/Facebook';
import './main-page.css';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Header>
          <h1 className={"h1 text-white header-background-transparent"}>ONLINE PROGRAMOZÓ NYÁRI TÁBOROK ÉS KÉPZÉSEK!</h1>
          <h2 className={"h4 text-white header-background-transparent text-uppercase"}>
            Tanfolyamainkat a legmodernebb Finn, Dán és Amerikai módszertanok szerint építettük fel, hogy a legmagasabb szintű képzést kaphasd!
          </h2>

          <HeaderButtons />
        </Header>
        <Videos />
        <Boxes />
        <Facebook />
        <Footer />
      </div>
    );
  }
}
