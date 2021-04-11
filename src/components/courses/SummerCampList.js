import React from 'react';
import CourseCard from './components/CourseCard';
import './courses.css';

export default () => (
  <React.Fragment>
    <div className={"row"}>
      <div className={"col-md-12 text-center mt-3"} id="hot-clicks">
        <hr />
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("scratch-card").scrollIntoView()}>Scratch</button>
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("pygame-card").scrollIntoView()}>PyGame</button>
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("python-card").scrollIntoView()}>Python</button>
        <br />
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("html-card").scrollIntoView()}>HTML + CSS + JS</button>
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("c-sharp-card").scrollIntoView()}>C#</button>
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("java-card").scrollIntoView()}>Java</button>
        <button className={"btn btn-info m-1"} onClick={() => document.getElementById("sql-card").scrollIntoView()}>SQL</button>
        <hr />
      </div>
    </div>

    <div className={"row mt-3"}>
      <div className={"col-1"}></div>
      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="scratch-card"
          title="Scratch tábor"
          video={{
            youtubeId: "ZnffgWOwStQ",
            title: "Scratch tábor - 14. nap",
            thumbnailCssId: "list-video-scratch"
          }}
          moreVideos={["Fo6V9zOm0DU", "ijXrphDdW2A", "ZnffgWOwStQ"]}
          classLength="2 hét, 10 alkalom, alkalmanként 2 óra"
          classSchedule="Július 5-től minden hétköznap, 9:00-tól"
          ageGroup="9-14 éveseknek ajánlott"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A tábor során a "Scratch" nevű program segítségével tanulunk meg játékokat és animációkat létrehozni. Ennek alkalmazásával még konkrét programkód írása nélkül, "logikai legókockákból" tudunk összerakni saját programokat, játékokat. Ezek a legókockák teljes mértékben fedésben vannak a valós programozási nyelvekben használt parancsokkal.'
          effects='Fejlődik coderjeink logikai készsége, megtanulnak "számítógépként gondolkozni" és gyakorolják a csapatban való munkát.'
          price="30 000 Ft"
          course={{
            name: "Scratch tábor",
            currency: "huf",
            amount: 30000
          }} />
      </div>

      <div className={"col-md-5 mb-3"}>
        <CourseCard
          cardId="pygame-card"
          title="PyGame tábor"
          video={{
            youtubeId: "KNN8e4gf1YU",
            title: "PyGame Szakkör Promo - Garuda Academy",
            thumbnailCssId: "list-video-pygame"
          }}
          classLength="6 hét, heti 1 alkalom, alkalmanént 3 óra"
          classSchedule="Július 6-tól, keddenként, 13:00"
          ageGroup="14- éves kortól ajánlott"
          groupSize="Maximum 4 fő, 2 fős csapatokra osztva."
          requirements="A képzés elvégzéséhez szükséges a Python alapképzés elvégzése (vagy releváns Python tapasztalat)."
          thematics='A tábor során codereink a PyGame könyvtárral tanulnak meg játékokat létrehozni! Ennek segítségével 2 dimenziós játékokat lehet létrehozni, ezen túl viszont csak a képzeletük szab határt! Szabadon választhatóak a zenék, szereplők, készíthető online vagy akár multiplayer funkció!'
          effects='A tábor során a résztvevők megtanulnak magabiztosan, magas szinten programozni és alkalmazást tervezni.'
          price="27 000 Ft"
          course={{
            name: "PyGame tábor",
            currency: "huf",
            amount: 27000
          }} />
      </div>
      <div className={"col-1"}></div>
    </div>

    <div className={"row"}>
      <div className={"col-1"}></div>
      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="python-card"
          title="Python tábor"
          img={{
            cssId: "list-img-python"
          }}
          classLength="4 hét, heti 1 alkalom, alkalmanént 3 óra"
          classSchedule="Július 5-től hétfőnként, 13:00-tól"
          ageGroup="14- éves kortól"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A tábor során codereink a Python programozási nyelvvel ismerkednek meg, különböző logikai és algoritmizálós feladatok megoldásával!'
          effects='A tábor célja, hogy egy olyan alapot kapjanak a résztvevők ami segíteni fogja őket az érettségiben, illetve felkészíti őket a PyGame táborra!'
          price="24 000 Ft"
          course={{
            name: "Python tábor",
            currency: "huf",
            amount: 24000
          }} />
      </div>

      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="html-card"
          title="HTML + CSS + JS tábor"
          img={{
            cssId: "list-img-frontend"
          }}
          classLength="6 hét, heti 1 alkalom, alkalmanént 3 óra"
          classSchedule="Július 7-től Szerdánként, 13:00-tól"
          ageGroup="14- éves kortól"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A tábor során a HTML, CSS, Bootstrap, illetve a JavaScript programozási nyelvvel ismerkedünk meg.'
          effects='A tábor végére a résztvevők tökéletesen felkészültek lesznek az érettségi HTML részére, valamint képessé vállnak saját reszponzív (mobilon és asztali eszközön is megjelenő) weboldalak létrehozására, illetve böngészőben futó játékok, animációk létrehozására!'
          price="27 000 Ft"
          course={{
            name: "html css js tábor",
            currency: "huf",
            amount: 27000
          }} />
      </div>
      <div className={"col-1"}></div>
    </div>

    <div className={"row"}>
      <div className={"col-1"}></div>
      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="c-sharp-card"
          title="C# tábor"
          img={{
            cssId: "list-img-csharp"
          }}
          classLength="4 hét, heti 1 alkalom, alkalmanént 3 óra"
          classSchedule="Július 8-től csütörtökönként, 13:00-tól"
          ageGroup="14- éves kortól"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A tábor során codereink a C# programozási nyelvvel ismerkednek meg, különböző logikai feladatok megoldásával és felhasználói felületek tervezésével!'
          effects='A tábor célja hogy felkészítse teljesen az érettségire a résztvevőket és megtanuljanak felhasználói felületeket tervezni!'
          price="21 000 Ft"
          course={{
            name: "C sharp tábor",
            currency: "huf",
            amount: 21000
          }} />
      </div>

      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="java-card"
          title="Java tábor"
          img={{
            cssId: "list-img-java"
          }}
          classLength="4 hét, heti 1 alkalom, alkalmanént 3 óra"
          classSchedule="Július 9-től Péntekenként, 13:00-tól"
          ageGroup="14- éves kortól"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A tábor során Codereink a Java programozási nyelvvel ismerkednek meg, különböző logikai feladatok megoldásával és felhasználói felületek tervezésével!'
          effects='A tábor célja hogy felkészítse teljesen az érettségire a résztvevőket és megtanuljanak felhasználói felületeket tervezni!'
          price="21 000 Ft"
          course={{
            name: "Python tábor",
            currency: "huf",
            amount: 21000
          }} />
      </div>
      <div className={"col-1"}></div>
    </div>

    <div className={"row"}>
      <div className={"col-1"}></div>
      <div className={"col-md-5 mb-3"}>
        <CourseCard 
          cardId="sql-card"
          title="SQL tábor"
          img={{
            cssId: "list-img-sql"
          }}
          classLength="4 hét, heti 1 alkalom, alkalmanént 3 óra"
          classSchedule="Július 10-től szombatonként, 9:00-tól"
          ageGroup="14- éves kortól"
          groupSize="Maximum 4 fő, 2-4 fős csapatokra osztva."
          requirements="Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs."
          thematics='A tábor során MySQL nyelvvel ismerkedünk meg, segítségével megtanulunk adatbázisokból összetett lekérésekkel adatokat kinyerni!'
          effects='A tábor célja, hogy felkészítse teljesen az érettségire a résztvevőket és megtanuljanak bonyolult SQL lekéréseket írni!'
          price="21 000 Ft"
          course={{
            name: "SQL tábor",
            currency: "huf",
            amount: 21000
          }} />
      </div>

      <div className={"col-md-5 mb-3"}>
        
      </div>
      <div className={"col-1"}></div>
    </div>
  </React.Fragment>
);
