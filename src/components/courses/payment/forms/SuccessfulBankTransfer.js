import React from "react";
import FormatNumberService from './services/FormatNumberService';
import ReferenceCreatorService from './services/ReferenceCreatorService';
import FormSuccessMessages from './constants/FormSuccessMessages';

export default (props) => {
  const formatNumberService = FormatNumberService.getInstance();
  const referenceCreatorService = ReferenceCreatorService.getInstance();
  const { chosenCourse, signUpInformation } = props;

  return (
    <div>
      <div className="alert alert-success">
        { FormSuccessMessages.APPLICATION_SUCCESSFUL }
      </div>

      <h6>Fizetendő:</h6>
      <div className="mb-3">
        { formatNumberService.addSpacesToNumber(chosenCourse.amount) } Ft
      </div>

      <h6>Számla tulajdonos:</h6>
      <div className="mb-3">Molnár Márk Manó E.V.</div>

      <h6>Számlaszám:</h6>
      <div className="mb-3">12600016-15776202-07894079</div>

      <h6>Közlemény:</h6>
      <div className="mb-3">
        { referenceCreatorService.generateReference(signUpInformation.billingName) }
      </div>

      <h6>Szolgáltató (bank):</h6>
      <div>Transferwise</div>
    </div>
  );
}
