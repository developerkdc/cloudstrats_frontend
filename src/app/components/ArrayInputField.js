import React from "react";
import JumboAppTextField from "@jumbo/components/JumboAppTextField/JumboAppTextField";
import { ErrorMessage } from "formik";
import { outerDiv } from "@jumbo/constants/constants";
import Div from "@jumbo/shared/Div/Div";
import { Autocomplete, Typography } from "@mui/material";

const ArrayInputField = ({ label, name, options, setField }) => {
  return (
    <Div sx={outerDiv}>
      <Typography variant="h5">{label}</Typography>
      <Autocomplete
        multiple
        id={name}
        options={options}
        value={options}
        freeSolo
        autoSelect
        onChange={(e, value) => setField(value)}
        renderOption={() => null}
        renderInput={(params) => (
          <JumboAppTextField
            {...params}
            variant="standard"
            name={name}
            id={name}
          />
        )}
      />
      <Div sx={{ height: "30px" }}>
        <ErrorMessage name={name} component="div" style={{ color: "red" }} />
      </Div>
    </Div>
  );
};

export default ArrayInputField;
