// PaymentForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './payment.css';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod);
      setPaymentError(null);
      // Send paymentMethod.id to your server to complete the payment
    }
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div className="card-element-container">
        <CardElement />
      </div>
      <div>
        <button className="payment-button" type="submit" disabled={!stripe}>
          Pay
        </button>
      </div>
      {paymentError && <div className="error-message">{paymentError}</div>}
      {paymentSuccess && <div className="success-message">Payment successful</div>}
    </form>
  );
};

export default Payment;
