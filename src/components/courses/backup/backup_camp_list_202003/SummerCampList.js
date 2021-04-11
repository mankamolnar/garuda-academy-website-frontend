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
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("html-card").scrollIntoView()}>HTML</button>
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("javascript-card").scrollIntoView()}>JavaScript</button>
        <hr />
      </div>
    </div>

    <div className={"row mt-3"}>
      <div className={"col-1"}></div>
      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="scratch-card"
          title="Scratch tanfolyam (kezdő)"
          video={{
            youtubeId: "6fIkB2F8N38",
            title: "Scratch tábor - 14. nap",
            thumbnailCssId: "list-video-scratch"
          }}
          classLength="2 hét, 10 alkalom, alkalmanként 4 óra"
          classSchedule="Június 16, Június 30, Július 14, Július 28, Augusztus 11"
          ageGroup="9-14 éveseknek ajánlott"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A képzés során a "Scratch" nevű program használatát sajátítjuk el. Ennek alkalmazásával még konkrét programkód írása nélkül, "logikai legókockákból" tudunk összerakni saját programokat, játékokat. Ezek a legókockák teljes mértékben fedésben vannak a valós programozási nyelvekben használt parancsokkal, így fejlődik a tanulók logikai készsége, megtanulnak "számítógépként gondolkozni" és gyakorolják a csapatban való munkát. A képzés végére a tanulók képessé vállnak saját játékok / programok elkészítésére.'
          price="35 000 Ft"
          highlightedInfo="2021-es táboraink véglegesítés alatt állnak! Az itt feltüntetett információk tájékoztató jellegűek!" />
      </div>

      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="python-card"
          title="Python alapképzés (kezdő)"
          classLength="4 hét, heti 1 alkalom, alkalmanént 4 óra."
          classSchedule="Július 1"
          ageGroup="14- éves kortól"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A képzés során a tanulók a Python programozási nyelvvel ismerkednek meg. A képzés célja, hogy egy olyan alapot kapjanak a diákok amivel a későbbiekben már el tudnak kezdeni specializálódni webfejlesztés vagy asztali alkalmazások irányba. A képzés végére a diákok képessé vállnak terminálban/konzolban futó szöveges alkalmazások készítésére.'
          price="19 000 Ft"
          highlightedInfo="2021-es táboraink véglegesítés alatt állnak! Az itt feltüntetett információk tájékoztató jellegűek!" />
      </div>
      <div className={"col-1"}></div>
    </div>

    <div className={"row"}>
      <div className={"col-1"}></div>
      <div className={"col-md-5 mb-3"}>
        <CourseCard
          title="Python PRO képzés (haladó)"
          classLength="4 hét, heti 1 alkalom, alkalmanént 4 óra."
          classSchedule="Augusztus 14"
          ageGroup="14- éves kortól ajánlott"
          groupSize="Maximum 4 fő, 2 fős csapatokra osztva."
          requirements="A képzés elvégzéséhez szükséges a Python alapképzés elvégzése (vagy releváns Python tapasztalat), valamint a HTML kurzus elvégzése (vagy releváns HTML tapasztalat), továbbá számítógép és stabil internet kapcsolat."
          thematics='A képzés során a tanulók a Django keretrendszerrel ismerkednek meg. Ennek segítségével képessé vállnak adatbázissal rendelkező komplex webalkalmazások (pl.: webshop, neveldék stb.) létrehozására.'
          price="19 000 Ft"
          highlightedInfo="2021-es táboraink véglegesítés alatt állnak! Az itt feltüntetett információk tájékoztató jellegűek!" />
      </div>

      <div className={"col-md-5 mb-3"}>
        <CourseCard
          title="Python + Python PRO + HTML kombinált csomag"
          classLength="10 hét, 12 alkalom, alkalmanként 4 óra."
          classSchedule="Python: Július 1, HTML: Július 23, Python PRO: Augusztus 14"
          ageGroup="14- éves kortól ajánlott"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A képzés során a tanulók a Django keretrendszerrel ismerkednek meg. Ennek segítségével képessé vállnak adatbázissal rendelkező komplex webalkalmazások (pl.: webshop, neveldék stb.) létrehozására.'
          price="45 000 Ft"
          highlightedInfo="2021-es táboraink véglegesítés alatt állnak! Az itt feltüntetett információk tájékoztató jellegűek!" />
      </div>
      <div className={"col-1"}></div>
    </div>

    <div className={"row"}>
      <div className={"col-1"}></div>
      <div className={"col-md-5 mb-3"}>
        <CourseCard
          cardId="html-card"
          title="HTML Képzés - Webfejlesztés"
          classLength="4 hét, 4 alkalom, alkalmanként 4 óra."
          classSchedule="Július 23"
          ageGroup="14- éves kortól ajánlott"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A képzés során a HTML és CSS programozási nyelvet valamint a Bootstrap keretrendszert sajátítjuk el. A kurzus végére a diákok képessé vállnak saját reszponzív (mobilon és asztali eszközön is megjelenő) weboldalak létrehozására.'
          price="19 000 Ft"
          highlightedInfo="2021-es táboraink véglegesítés alatt állnak! Az itt feltüntetett információk tájékoztató jellegűek!" />
      </div>

      <div className={"col-md-5 mb-3"}>
        <CourseCard
          cardId="javascript-card"
          title="Javascript alapképzés (Kezdő)"
          classLength="4 hét, 4 alkalom, alkalmanként 4 óra."
          classSchedule="Július 6"
          ageGroup="14- éves kortól ajánlott"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Releváns HTML tudás szükséges, valamint számítógép és stabil internet kapcsolat."
          thematics='A képzés során a JavaScript programozási nyelvet tanuljuk meg amellyel képessé válunk böngészőben futó interaktív programok / játékok létrehozására. Megtanulunk adatokat lekérni külső szerverekből (API-kból) és azokat megjeleníteni a képernyőn. A tanuló a képzés során képessé válik a React tanfolyam elvégzésére.'
          price="19 000 Ft"
          highlightedInfo="2021-es táboraink véglegesítés alatt állnak! Az itt feltüntetett információk tájékoztató jellegűek!" />
      </div>
      <div className={"col-1"}></div>
    </div>
    
  </React.Fragment>
);
