import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import PaymentForm from '../forms/PaymentForm';

const stripePromise = loadStripe('pk_test_51I1itvINx3tZ5B4LyjNqRfD45nieozEzUEsaPuNFKYJVhiU56POTPexmIiopMDnxvSqQBa33GnBLwws3WMx9SGbi000PcZSmHZ');
//const stripePromise = loadStripe('pk_live_51I1itvINx3tZ5B4LtMWdlXRxpiIsvz4R0BQaRixnmmRlc3yblkv8g0k79zKntW9amQfy4UfbnfM00h2BKQloxIkF00ekBC7qL0');

export default (props) => (
  <Elements stripe={stripePromise}>
    <ElementsConsumer>
      {({stripe, elements}) => (
        <PaymentForm stripe={stripe} elements={elements} prevStep={props.prevStep} />
      )}
    </ElementsConsumer>
  </Elements>
);