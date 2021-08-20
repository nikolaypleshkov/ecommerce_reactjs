import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import InputForm from "./CustomTextField";
const AddressForm = () => {
  const methods = useForm();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <InputForm required name="firstName" label="First name" />
            <InputForm required name="lastName" label="Last name" />
            <InputForm required name="email" label="Email" />
            <InputForm required name="shippingAddress" label="Shipping Address" />
            <InputForm required name="city" label="City/Town" />
            <InputForm required name="postcode" label="Postcode" />
            <Grid item xs={12} sm={6} >
                <InputLabel>Shipping Country</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                        Bulgaria
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6} >
                <InputLabel>Shipping Subdevision</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                        Bulgaria
                    </MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6} >
                <InputLabel>Shipping Option</InputLabel>
                <Select value={} fullWidth onChange={}>
                    <MenuItem key={} value={}>
                        Bulgaria
                    </MenuItem>
                </Select>
            </Grid>
            
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
