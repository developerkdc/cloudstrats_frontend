import React from "react";
import Typography from "@mui/material/Typography";
import { ErrorMessage } from "formik";
import Div from "@jumbo/shared/Div/Div";
import JumboAppTextField from "@jumbo/components/JumboAppTextField/JumboAppTextField";
import { outerDiv } from "@jumbo/constants/constants";
import { DatePickerInput } from "rc-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormTextField = ({
  label,
  name,
  type,
  onChange,
  error,
  helperText,
  value,
}) => {
  return (
    <Div sx={outerDiv}>
      <Typography variant="h5">{label}</Typography>
      {type === "file" ? (
        <input
          type="file"
          id={name}
          name={name}
          onChange={onChange}
          sx={{
            width: "100%",
            fontSize: "10px",
          }}
        />
      ) : (
        <JumboAppTextField
          multiline
          type={type}
          id={name}
          name={name}
          variant="standard"
          sx={{
            width: "100%",
            fontSize: "10px",
          }}
        />
      )}
      <Div sx={{ height: "30px" }}>
        <ErrorMessage name={name} component="div" style={{ color: "red" }} />
        {error && <div style={{ color: "red" }}>{helperText}</div>}
      </Div>
    </Div>
  );
};

export default FormTextField;
