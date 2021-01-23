import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes';
import './header-buttons.css';

export default () => (
  <div className={"text-center"}>
    <div className="row header-buttons header-buttons-sd">
      <div className="col-sm-4">
        <Link to={routes.childClubs} className={"btn btn-success btn-lg mt-4"}>Gyerek<br />szakkörök</Link>
      </div>
      <div className="col-sm-4">
        <Link to={routes.summerCamps} className={"btn btn-success btn-lg mt-4"}>Nyári<br />táborok</Link>
      </div>
      <div className="col-sm-4">
        <Link to={routes.privateLessons} className={"btn btn-success btn-lg mt-4"}>Privát<br />órák</Link>
      </div>
    </div>

    <div className="row header-buttons header-buttons-hd">
      <div className="col-sm-4">
        <Link to={routes.childClubs} className={"btn btn-success btn-lg mt-4"}>Gyerek szakkörök</Link>
      </div>
      <div className="col-sm-4">
        <Link to={routes.summerCamps} className={"btn btn-success btn-lg mt-4"}>Nyári táborok</Link>
      </div>
      <div className="col-sm-4">
        <Link to={routes.privateLessons} className={"btn btn-success btn-lg mt-4"}>Privát órák</Link>
      </div>
    </div>
  </div>
);
