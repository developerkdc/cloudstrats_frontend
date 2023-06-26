import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Div from "@jumbo/shared/Div/Div";
import FormTextField from "app/components/FormTextField";
import * as yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import { outerDiv } from "@jumbo/constants/constants";
import { parse } from "date-fns";

export default function PanCardForm() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const user = {
    pan_card_number: "FEGPP2908C",
    name_on_pan_card: "REHAN PATHAN",
    dob_on_pan_card: "12-29-2000",
  };

  const initialValues = {
    pan_card_number: "",
    name_on_pan_card: "",
    dob_on_pan_card: "",
  };

  const validationSchema = yup.object({
    pan_card_number: yup.string().required("Pan Card Number is required"),
    name_on_pan_card: yup.string().required("Name On Pan Card is required"),
    dob_on_pan_card: yup.string().required("DOB On Pan is required"),
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h3" sx={{ color: "#00abb3" }}>
          Pan Card Details
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: "white" }}>
        <Formik
          validateOnChange={false}
          initialValues={user ? user : initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form noValidate autoComplete="off">
              <Div
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                }}
              >
                <FormTextField name="pan_card_number" label="PAN Card Number" />
                <FormTextField
                  name="name_on_pan_card"
                  label="Name On Pan Card"
                />

                <Div sx={outerDiv}>
                  <Typography variant="h5">DOB On Pan Card</Typography>
                  <DatePickerInput
                    defaultValue={parse(
                      user.dob_on_pan_card,
                      "MM-dd-yyyy",
                      new Date()
                    )}
                    onChange={(date) => setFieldValue("dob_on_pan_card", date)}
                    className="my-custom-datepicker-component"
                  />
                  <Div sx={{ height: "30px" }}>
                    <ErrorMessage
                      name="dob_on_pan_card"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Div>
                </Div>
              </Div>
              <Div sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Div>
            </Form>
          )}
        </Formik>
      </AccordionDetails>
    </Accordion>
  );
}
