import React from "react";
// import { TextField, Grid } from "@material-ui/core";
import { Grid, Input } from "semantic-ui-react";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  //   const isError = false;
  return (
    <>
      <Grid.Column mobile={16} tablet={8} computer={8}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Input fluid {...field} placeholder={label} required />
          )}
        />
      </Grid.Column>
    </>
  );
};

// const FormInput = ({ name, label }) => {
//   const { control } = useFormContext();
//   //   const isError = false;
//   return (
//     <Grid item xs={12} sm={6}>
//       <Controller
//         control={control}
//         name={name}
//         render={({ field }) => (
//           <TextField
//             fullWidth
//             defaultValue=''
//             {...field}
//             label={label}
//             required
//           />
//         )}
//       />
//     </Grid>
//   );
// };

export default FormInput;
