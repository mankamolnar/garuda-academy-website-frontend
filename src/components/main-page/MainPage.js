import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../Routes';
import Header from '../common/header/Header';
import Menu from '../common/menu/Menu';
import Boxes from './Boxes';
import Footer from '../common/footer/Footer';
import Videos from './Videos';
import Facebook from '../common/facebook/Facebook';

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

          <div className={"text-center"}>
            <div className="row">
              <div className="col-sm-4">
                <Link to={routes.childClubs} className={"btn btn-success btn-lg mt-4 mr-2 ml-2"}>Gyerek szakkörök</Link>
              </div>
              <div className="col-sm-4">
                <Link to={routes.summerCamps} className={"btn btn-success btn-lg mt-4 mr-2 ml-2"}>Nyári táborok</Link>
              </div>
              <div className="col-sm-4">
                <Link to={routes.privateLessons} className={"btn btn-success btn-lg mt-4 mr-2 ml-2"}>Privát órák</Link>
              </div>
            </div>
          </div>
        </Header>
        <Videos />
        <Boxes />
        <Facebook />
        <Footer />
      </div>
    );
  }
}
