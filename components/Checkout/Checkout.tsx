import {
  Elements,
  PaymentElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51PUlYXP0cyYM8ORhOOiof1YDwlzmX95cHYdaOhymtnVD88YIAxYL0rCYM9FdhMMdkcThlg5cdWqGu9d4AGDhRE3w00ei9maw0s"
);

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard`
      }
    });

    if (error) {
      axios.post("http://localhost:8000/api/payment/fail-payment/", {
        clientSecret,
        code: error.code,
        description: error.message
      });
      console.error("Error confirming payment:", error);
    } else {
      axios
        .post("http://localhost:8000/api/payment/complete-payment/", {
          clientSecret
        })
        .then((response) => {
          console.log("Payment successful:", response);
        })
        .catch((error) => {
          console.error("Error completing payment:", error);
        });
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay via Stripe
      </button>
    </form>
  );
};

const StripePage = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/payment/initiate/", {
        amount: 150,
        currency: "USD"
      })
      .then((response) => {
        setClientSecret(response.data.client_secret);
      })
      .catch((error) => {
        console.error("Error initializing payment:", error);
      });
  }, []);

  const options = {
    clientSecret
  };

  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default StripePage;
