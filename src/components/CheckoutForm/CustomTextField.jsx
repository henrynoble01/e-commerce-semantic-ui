import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  //   const isError = false;
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            fullWidth
            defaultValue=''
            {...field}
            label={label}
            required
          />
        )}
      />
    </Grid>
  );
};

// export const SelectInput =()=>{
//     const control = useFormContext();

// }

export default FormInput;
