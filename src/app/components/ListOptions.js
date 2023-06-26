import React from "react";
import { useFormikContext, Field, ErrorMessage } from "formik";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import Div from "@jumbo/shared/Div/Div";
import { outerDiv } from "@jumbo/constants/constants";

const ListOptions = ({ name, label, options }) => {
  const { values, handleChange, errors, touched } = useFormikContext();

  return (
    <Div sx={outerDiv}>
      <FormControl variant="standard" fullWidth>
        <Typography variant="h5">{label}</Typography>
        <Field
          as={Select}
          id={name}
          name={name}
          label={label}
          MenuProps={{
            sx: {
              "&& .Mui-selected": {
                backgroundColor: "#b2b2b2",
              },
              "&& .Mui-hover": {
                backgroundColor: "#b2b2b2",
              },
            },
          }}
          value={values[name]}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} sx={{ bgcolor: "white" }}>
              {option}
            </MenuItem>
          ))}
        </Field>
      </FormControl>

      <Div style={{ height: "30px" }}>
        {errors[name] && touched[name] && (
          <ErrorMessage name={name} component="div" style={{ color: "red" }} />
        )}
      </Div>
    </Div>
  );
};

export default ListOptions;
