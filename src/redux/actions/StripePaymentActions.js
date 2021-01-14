import axios from 'axios';

export function createPaymentIntent(paymentDetails) {

  const HOST = "https://garuda-payment-service.appspot.com";
  // const HOST = "http://localhost:8080";

  return function(dispatch) {
    dispatch({type: "PAYMENT_INTENT_PENDING"});

    axios.post(HOST + "/create-payment-intent", paymentDetails)
      .then((response) => {
        dispatch({type: "PAYMENT_INTENT_FULFILLED", payload: response.data});
      }).catch((err) => {
        dispatch({type: "PAYMENT_INTENT_REJECTED", payload: err});
      });
  }
}
