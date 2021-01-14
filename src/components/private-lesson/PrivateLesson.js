import React from 'react';
import Menu from '../common/menu/Menu';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import PrivateLessonList from './PrivateLessonList';

export default class PrivateLesson extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Header>
          <h1 className={"h1 text-white header-background-transparent text-uppercase"}>
            Privát órák
          </h1>
          <h2 className={"h4 text-white header-background-transparent text-uppercase"}>
            Segítség kell az érettségiben?<br />
            Vagy egy egyetemi vizsgával vagy elakadva?<br />
            Esetleg saját tempóban tanulnál?<br /><br />

            Privát órák 5000 ft / órától!
          </h2>
        </Header>
        <PrivateLessonList />
        <Footer />
      </React.Fragment>
    );
  }
}
