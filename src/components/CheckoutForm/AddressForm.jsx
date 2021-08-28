import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import {
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   Grid,
//   Typography,
// } from "@material-ui/core";

import { Button, Grid, Form, Header } from "semantic-ui-react";

import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol}) `,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    // console.log(countries);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubDivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
    // console.log("shipping division", countryCode, shippingSubdivision);
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubDivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  return (
    <>
      <Header as='h4'>Shipping Address</Header>
      <FormProvider {...methods}>
        <Form
          onSubmit={methods.handleSubmit((data) => {
            console.log({ ...data });
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOptions,
            });
          })}>
          <Grid container stackable>
            <FormInput name='firstName' label='First name' />
            <FormInput name='lastName' label='Last name' />
            <FormInput name='address1' label='Address' />
            <FormInput name='email' label='Email' />
            <FormInput name='city' label='City' />
            <FormInput name='zip' label='ZIP / Postal code' />

            <Grid.Column mobile={16} tablet={8} computer={8}>
              <label>Shipping Country</label>
              <Form.Field
                value={shippingCountry}
                control='select'
                onChange={(e) => {
                  setShippingCountry(e.target.value);
                  console.log(e.target.value);
                }}>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.label}
                  </option>
                ))}
              </Form.Field>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={8} computer={8}>
              <label>Shipping SubDivision</label>
              <Form.Field
                value={shippingSubdivision}
                control='select'
                onChange={(e) => setShippingSubdivision(e.target.value)}>
                {subdivisions.map((subdivision) => (
                  <option key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </option>
                ))}
              </Form.Field>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={8} computer={8}>
              <label>Shipping Options</label>
              <Form.Field
                value={shippingOption}
                control='select'
                onChange={(e) => setShippingOption(e.target.value)}>
                {options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Form.Field>
            </Grid.Column>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button as={Link} to='/cart'>
              Back to cart
            </Button>
            <Button type='submit' primary>
              Next
            </Button>
          </div>
        </Form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
