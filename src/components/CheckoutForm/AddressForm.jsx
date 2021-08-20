import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { commerce } from '../../lib/commerce';
import { useForm, FormProvider } from "react-hook-form";
import InputForm from "./CustomTextField";
import { Link } from "react-router-dom";

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]); 
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdevisions] = useState([]);
    const [shippingSubdivision, setShippingSubdevision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    
    const methods = useForm();

    const fetchShippingCountires = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    }

    useEffect(() => {
      fetchShippingCountires(checkoutToken.id);
    }, []);

    const fetchSubdevisions = async(countryCode) => {
      const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
      
      setShippingSubdevisions(subdivisions);
      setShippingSubdevision(Object.keys(subdivisions)[0]);
    }

    useEffect(() => {
      if(shippingCountry) fetchSubdevisions(shippingCountry);
      
    }, [shippingCountry])

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
      const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });

      setShippingOptions(options); 
      setShippingOption(options[0].id);
    }

    useEffect(() => {
      if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision])

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name } ));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name } ));
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}));
     
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
          <Grid container spacing={3}>
            <InputForm required name="firstName" label="First name" />
            <InputForm required name="lastName" label="Last name" />
            <InputForm required name="email" label="Email" />
            <InputForm required name="shippingAddress" label="Shipping Address" />
            <InputForm required name="city" label="City/Town" />
            <InputForm required name="postcode" label="Postcode" />
            <Grid item xs={12} sm={6} >
                <InputLabel>Shipping Country</InputLabel>
                <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                    {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                        {country.label}
                    </MenuItem>
                    ))}
                </Select>
             </Grid>
            <Grid item xs={12} sm={6} >
                <InputLabel>Region</InputLabel>
                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdevision(e.target.value)}>
                  {subdivisions.map((subdivision) => (
                    <MenuItem key={subdivision.id} value={subdivision.id}>
                        {subdivision.label}
                    </MenuItem>
                  ))}
                </Select>
            </Grid>
            <Grid item xs={12} sm={6} >
                <InputLabel>Shipping Option</InputLabel>
                <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                  {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.label}
                    </MenuItem>
                  ))}
                </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button component={Link} to='/cart' variant="outlined">Back to Cart</Button>
            <Button type = "submit" variant="contained" color='primary' >Next</Button> 
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
