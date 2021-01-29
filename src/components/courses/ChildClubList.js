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
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("pygame-card").scrollIntoView()}>PyGame</button>
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
            youtubeId: "ZnffgWOwStQ",
            title: "Scratch tábor - 14. nap",
            thumbnailCssId: "list-video-scratch"
          }}
          moreVideos={["Fo6V9zOm0DU", "ijXrphDdW2A", "ZnffgWOwStQ"]}
          classLength="90 perc / alkalom."
          classSchedule="Minden hétfőn 16:00-tól, Június 15-ig."
          ageGroup="9 éves kortól ajánlott."
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Olvasás és írástudás szükséges."
          thematics='A szakkör során a "Scratch" nevű program segítségével tanulunk meg játékokat és animációkat létrehozni. Ennek alkalmazásával még konkrét programkód írása nélkül, "logikai legókockákból" tudunk összerakni saját programokat, játékokat. Ezek a legókockák teljes mértékben fedésben vannak a valós programozási nyelvekben használt parancsokkal.'
          effects='Fejlődik coderjeink logikai készsége, megtanulnak "számítógépként gondolkozni" és gyakorolják a csapatban való munkát.'
          others="A szakkörön hangsúlyos szerepet kap a csapatmunka és az ebből fakadó egymástól való tanulás. A csapatoknak amennyiben saját fejlesztési ötletük van, eltérhetnek a kiadott ajánlott feladattól."
          price="9 900 Ft / hó"
          course={{
            name: "Scratch szakkör",
            currency: "huf",
            amount: 9900
          }} />
      </div>

      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="pygame-card"
          title="PyGame szakkör (profi)"
          video={{
            youtubeId: "KNN8e4gf1YU",
            title: "PyGame Szakkör Promo - Garuda Academy",
            thumbnailCssId: "list-video-pygame"
          }}
          classLength="90 perc / alkalom."
          classSchedule="Minden Kedd 17:00-tól, Június 15-ig."
          ageGroup="14 éves kortól ajánlott."
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Továbbá követelmény a Python nyelv alapos ismerete. Amennyiben nem programoztál még, ajánljuk próbáld ki a Python szakkörünket!"
          thematics='A szakkör során codereink a PyGame könyvtárral tanulnak meg játékokat létrehozni! Ennek segítségével 2 dimenziós játékokat lehet létrehozni, ezen túl viszont csak a képzeletük szab határt! Szabadon választhatóak a zenék, szereplők, készíthető online vagy akár multiplayer funkció!'
          effects='A szakkör során a résztvevők megtanulnak magabiztosan, magas szinten programozni és alkalmazást tervezni.'
          others="A szakkörön hangsúlyos szerepet kap a csapatmunka és az ebből fakadó egymástól való tanulás. A munka itt már kizárólag a gyerekek ötletein zajlik. Nincsenek ajánlott feladatok se!"
          price="19 900 Ft / hó"
          course={{
            name: "PyGame szakkör",
            currency: "huf",
            amount: 19900
          }} />
      </div>
      <div className={"col-1"}></div>
    </div>

    <div className={"row mt-3"}>
      <div className={"col-1"}></div>
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
          thematics='A szakkör során codereink a Python programozási nyelvvel ismerkednek meg. Elsősorban algoritmizálós feladatokkal készülünk nekik, de igény esetén belekóstolhatnak más területekbe is (pl.: web-fejlesztés).'
          effects='A szakkör célja, hogy egy olyan alapot kapjanak a résztvevők ami segíteni fogja őket az érettségiben, illetve felkészíti őket a PyGame szakkörre!'
          others="A szakkörön hangsúlyos szerepet kap a csapatmunka és az ebből fakadó egymástól való tanulás. A csapatoknak amennyiben saját fejlesztési ötletük van, eltérhetnek a kiadott ajánlott feladattól."
          price="14 900 Ft / hó"
          course={{
            name: "Python szakkör",
            currency: "huf",
            amount: 14900
          }} />
      </div>

      <div className={"col-md-5 mb-3"}></div>
      <div className={"col-1"}></div>
    </div>
  </React.Fragment>
);
