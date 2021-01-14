import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import PaymentForm from '../forms/PaymentForm';

// TODO: add profiles
const stripePromise = loadStripe('pk_live_51I9KvzFdcBKxPoB2ZrE1XuV3pJG4UjtnMh9GySR8z04cejt33t2D4cCYhXp2KPSrUX4MbuRC9jxpeylZz3e3Otzn00ggnNRctA');

export default (props) => (
  <Elements stripe={stripePromise}>
    <ElementsConsumer>
      {({stripe, elements}) => (
        <PaymentForm stripe={stripe} elements={elements} prevStep={props.prevStep} />
      )}
    </ElementsConsumer>
  </Elements>
);