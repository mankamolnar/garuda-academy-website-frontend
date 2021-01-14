import React from 'react';
import { connect } from 'react-redux';
import { chooseCourse } from './../../redux/actions/CourseActions';
import { openModal } from './../../redux/actions/ModalStateActions';
import timer from '../common/timer.png';
import user from '../common/user.png';
import group from '../common/group.png';
import tools from '../common/tools.png';
import book from '../common/book.png';
import price from '../common/price.png';
import calendar from '../common/calendar.png';
import increase from '../common/increase.png';
import other from '../common/other.png';
import './courses.css';

// TODO: export pngs to webp
// TODO: outsource cards to component
class ChildClubList extends React.Component {
  constructor() {
    super();
    this.state = {
      playLeft: false
    }
  }

  handleCourseClick = (course) => {
    this.props._chooseCourse(course);
    this.props._openModal();
  };

  setLeftPlayer = () => {
    this.setState({playLeft: true});
  };

  render() {
    return (
      <React.Fragment>
        <div className={"row"}>
          <div className={"col-md-12 text-center mt-3"} id="hot-clicks">
            <hr />
            <button className={"btn btn-info m-1"} onClick={() => document.getElementById("scratch-card").scrollIntoView()}>Scratch</button>
            <button className={"btn btn-info m-1"} onClick={() => document.getElementById("python-card").scrollIntoView()}>Python</button>
            <hr />
          </div>
        </div>

        <div className={"row mt-3"}>
          <div className={"col-1"}></div>
          <div className={"col-md-5 mb-3"}>

            <div className={"card"} id={"scratch-card"}>
              <div className={"card-header h5"}>
                Scratch szakkör (kezdő)
              </div>
              <div className={"card-body"}>
                {
                  this.state.playLeft
                    ? <iframe className="mb-3" title={"Scratch tábor - 14. nap"} width="100%" height="250" src="https://www.youtube.com/embed/6fIkB2F8N38?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    : <div className="video-player-min mb-3" id={"list-video-scratch"} onClick={this.setLeftPlayer}></div>
                }
                <p>
                  <img src={timer} alt="Időtartam" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span>
                  &nbsp;90 perc / alkalom.
                </p>
                <p>
                  <img src={calendar} alt="Szakkör időpontok" className={'box_icon'} />
                  <span className={'description_title'}>Szakkör időpontok:</span>
                  &nbsp;Minden hétfőn 16:00-tól, Június 15-ig.
                </p>
                <p>
                  <img src={user} alt="Korosztály" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span>
                  &nbsp;9 éves kortól ajánlott.
                </p>
                <p>
                  <img src={group} alt="Csoport létszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span>
                  &nbsp;Maximum 4 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Követelmény" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span>
                  &nbsp;Számítógép és stabil internet kapcsolat. Olvasás és írástudás szükséges.
                </p>
                <p>
                  <img src={book} alt="Tematika" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span>
                  &nbsp;A szakkör során a "Scratch" nevű program segítségével tanulunk meg játékokat és animációkat létrehozni. Ennek alkalmazásával még konkrét programkód írása nélkül, "logikai legókockákból" tudunk összerakni saját programokat, játékokat. Ezek a legókockák teljes mértékben fedésben vannak a valós programozási nyelvekben használt parancsokkal.
                </p>
                <p>
                  <img src={increase} alt="Pozitív hatások" className={'box_icon'} />
                  <span className={'description_title'}>Pozitív hatások:</span>
                  &nbsp;Fejlődik coderjeink logikai készsége, megtanulnak "számítógépként gondolkozni" és gyakorolják a csapatban való munkát.
                </p>
                <p>
                  <img src={other} alt="Egyebek" className={'box_icon'} />
                  <span className={'description_title'}>Egyebek:</span>
                  &nbsp;A szakkörön hangsúlyos szerepet kap a csapatmunka és az ebből fakadó egymástól való tanulás. A csapatoknak amennyiben saját fejlesztési ötletük van, eltérhetnek a kiadott ajánlott feladattól.
                </p>
                <p>
                  <img src={price} alt="Ár" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span>
                  &nbsp;24 000 Ft / hó
                </p>
                <p className={"sign-up-button"}>
                  <button className={"btn btn-success"} onClick={() => {
                    const course = {name: "Scratch szakkör", currency: "huf", amount: 24000};
                    this.handleCourseClick(course);
                  }}>Jelentkezési lap</button>
                </p>
              </div>
            </div>

          </div>

          <div className={"col-md-5 mb-3"}>

            <div className={"card"} id={"python-card"}>
              <div className={"card-header h5"}>
                Python szakkör (haladó)
              </div>
              <div className={"card-body"}>
                <div className="course-list-img mb-3" id={"list-img-python"}></div>
                <p>
                  <img src={timer} alt="Időtartam" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span>
                  &nbsp;90 perc / alkalom.
                </p>
                <p>
                  <img src={calendar} alt="Szakkör időpontok" className={'box_icon'} />
                  <span className={'description_title'}>Szakkör időpontok:</span>
                  &nbsp;Minden szerdán 17:00-tól, Június 15-ig.
                </p>
                <p>
                  <img src={user} alt="Korosztály" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span>
                  &nbsp;14 éves kortól ajánlott.
                </p>
                <p>
                  <img src={group} alt="Csoport létszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span>
                  &nbsp;Maximum 4 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Követelmény" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span>
                  &nbsp;Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs.
                </p>
                <p>
                  <img src={book} alt="Tematika" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span>
                  &nbsp;A szakkör során codereink a Python programozási nyelvvel ismerkednek meg. Elsősorban algoritmizálós feladatokkal készülünk nekik, de igény esetén belekóstolhatnak más területekbe is (webfejlesztés, asztali alkalmazások stb.).
                </p>
                <p>
                  <img src={increase} alt="Pozitív hatások" className={'box_icon'} />
                  <span className={'description_title'}>Pozitív hatások:</span>
                  &nbsp;A szakkör célja, hogy egy olyan alapot kapjanak a résztvevők ami segíteni fogja őket az érettségiben, illetve a későbbiekben már el tudnak kezdeni specializálódni webfejlesztés vagy asztali alkalmazások irányba.
                </p>
                <p>
                  <img src={other} alt="Egyebek" className={'box_icon'} />
                  <span className={'description_title'}>Egyebek:</span>
                  &nbsp;A szakkörön hangsúlyos szerepet kap a csapatmunka és az ebből fakadó egymástól való tanulás. A csapatoknak amennyiben saját fejlesztési ötletük van, eltérhetnek a kiadott ajánlott feladattól.
                </p>
                <p>
                  <img src={price} alt="Ár" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span>
                  &nbsp;24 000 Ft / hó
                </p>
                <p className={"sign-up-button"}>
                  <button className={"btn btn-success"} onClick={() => {
                    const course = {name: "Python szakkör", currency: "huf", amount: 24000};
                    this.handleCourseClick(course);
                  }}>Jelentkezési lap</button>
                </p>
              </div>
            </div>

          </div>
          <div className={"col-1"}></div>
        </div>
      </React.Fragment>
    );
  }
}

const dispatcher = (dispatch) => ({
  _chooseCourse: (...args) => dispatch(chooseCourse(...args)),
  _openModal: (...args) => dispatch(openModal(...args))
});

export default connect(null, dispatcher)(ChildClubList);
