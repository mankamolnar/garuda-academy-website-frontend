import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import PaymentForm from '../forms/PaymentForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_LIVE_KEY);

export default (props) => (
  <Elements stripe={stripePromise}>
    <ElementsConsumer>
      {({stripe, elements}) => (
        <PaymentForm stripe={stripe} elements={elements} prevStep={props.prevStep} />
      )}
    </ElementsConsumer>
  </Elements>
);