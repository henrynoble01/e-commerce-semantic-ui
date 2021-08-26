import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const history = useHistory();
  const classes = useStyles();

  //   let Confirmation = () =>
  //     order.customer ? (
  //       <>
  //         <Typography variant='h5'>
  //           Thank you for your purchase, {order.customer.firstname}
  //           {order.customer.lastname}
  //         </Typography>
  //         <Divider className={classes.divider} />
  //         <Typography variant='subtitle2'>
  //           Order ref: {order.customer_reference}
  //         </Typography>
  //         <br />
  //         <Button component={Link} to='/' variant='outlined' type='button'>
  //           Back to Home
  //         </Button>
  //       </>
  //     ) : (
  //       <div className={classes.spinner}>
  //         <CircularProgress />
  //       </div>
  //     );
  let Confirmation = () => (
    <>
      <Typography variant='h5'>Thank you for your purchase,</Typography>
      <Divider className={classes.divider} />
      <Typography variant='subtitle2'>Order ref: ref</Typography>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button'>
        Back to Home
      </Button>
    </>
  );

  if (error) {
    <>
      <Typography variant='h5'>Error: {error}</Typography>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button'>
        Back to Home
      </Button>
    </>;
  }

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        // console.log(token);
        setCheckoutToken(token);
      } catch (error) {
        // eslint-disable-next-line no-restricted-globals
        history.pushState("/");
      }
    };

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        backStep={backStep}
        nextStep={nextStep}
        checkoutToken={checkoutToken}
        onCaptureCheckout={onCaptureCheckout}
      />
    );
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
