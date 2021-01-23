import React from 'react';
import CourseCard from './components/CourseCard';
import './courses.css';

export default () => (
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
        <CourseCard 
          cardId="scratch-card"
          title="Scratch szakkör (kezdő)"
          video={{
            youtubeId: "6fIkB2F8N38",
            title: "Scratch tábor - 14. nap",
            thumbnailCssId: "list-video-scratch"
          }}
          classLength="90 perc / alkalom."
          classSchedule="Minden hétfőn 16:00-tól, Június 15-ig."
          ageGroup="9 éves kortól ajánlott."
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Olvasás és írástudás szükséges."
          thematics='A szakkör során a "Scratch" nevű program segítségével tanulunk meg játékokat és animációkat létrehozni. Ennek alkalmazásával még konkrét programkód írása nélkül, "logikai legókockákból" tudunk összerakni saját programokat, játékokat. Ezek a legókockák teljes mértékben fedésben vannak a valós programozási nyelvekben használt parancsokkal.'
          effects='Fejlődik coderjeink logikai készsége, megtanulnak "számítógépként gondolkozni" és gyakorolják a csapatban való munkát.'
          others="A szakkörön hangsúlyos szerepet kap a csapatmunka és az ebből fakadó egymástól való tanulás. A csapatoknak amennyiben saját fejlesztési ötletük van, eltérhetnek a kiadott ajánlott feladattól."
          price="24 000 Ft / hó"
          course={{
            name: "Scratch szakkör",
            currency: "huf",
            amount: 24000
          }} />
      </div>

      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="python-card"
          title="Python szakkör (haladó)"
          img={{
            cssId: "list-img-python"
          }}
          classLength="90 perc / alkalom."
          classSchedule="Minden szerdán 17:00-tól, Június 15-ig."
          ageGroup="14 éves kortól ajánlott."
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A szakkör során codereink a Python programozási nyelvvel ismerkednek meg. Elsősorban algoritmizálós feladatokkal készülünk nekik, de igény esetén belekóstolhatnak más területekbe is (webfejlesztés, asztali alkalmazások stb.).'
          effects='A szakkör célja, hogy egy olyan alapot kapjanak a résztvevők ami segíteni fogja őket az érettségiben, illetve a későbbiekben már el tudnak kezdeni specializálódni webfejlesztés vagy asztali alkalmazások irányba.'
          others="A szakkörön hangsúlyos szerepet kap a csapatmunka és az ebből fakadó egymástól való tanulás. A csapatoknak amennyiben saját fejlesztési ötletük van, eltérhetnek a kiadott ajánlott feladattól."
          price="24 000 Ft / hó"
          course={{
            name: "Python szakkör",
            currency: "huf",
            amount: 24000
          }} />
      </div>
      <div className={"col-1"}></div>
    </div>
  </React.Fragment>
);
