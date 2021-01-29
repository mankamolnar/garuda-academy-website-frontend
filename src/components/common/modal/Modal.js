import React from 'react';
import closeButton from './img/close.webp';
import './css/modal.css';

export default (props) => (
  <div
    className={"bg-dark-transparent garuda-modal " + props.modalStyle}
    onClick={props.closeModal}>

    <div className="row modal-row">
      <div className="col-md-2 modal-closer"></div>
      <div className="col-md-8 modal-closer">

        <div className="card garuda-card vertical-center modal-card ">
          <div className="card-header position-relative">
            <div id="garuda-modal-title">
              <h4 className="mb-0">
                {props.title}
              </h4>
            </div>
            <div id="modal-close-btn-container">
              <img src={closeButton} className="modal-close-btn vertical-center modal-closer" alt="close-modal" />
            </div>
          </div>
          <div className="card-body">
            {props.body}
          </div>
        </div>

      </div>
      <div className="col-md-2 modal-closer"></div>
    </div>

  </div>
);
