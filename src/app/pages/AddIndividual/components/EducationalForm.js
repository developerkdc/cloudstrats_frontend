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
import * as yup from "yup";
import { Form, Formik } from "formik";
import Div from "@jumbo/shared/Div/Div";
import FormTextField from "app/components/FormTextField";

export default function EducationalForm() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const user = {
    level: "Degree",
    state: "Maharashtra",
    district: "Mumbai",
    university_name: "Mumbai University",
    year_from: 2012,
    year_to: 2016,
    main_subject: "Maths",
  };
  const initialValues = {
    level: "",
    state: "",
    district: "",
    university_name: "",
    year_from: "",
    year_to: "",
    main_subject: "",
  };

  const validationSchema = yup.object({
    level: yup.string().required("Level is required"),
    state: yup.string().required("State is required"),
    district: yup.string().required("District is required"),
    university_name: yup.string().required("University Name is required"),
    year_from: yup
      .number("It should be a number")
      .typeError("Year From should be a number")
      .required("Year From is required"),
    year_to: yup
      .number("It should be a number")
      .typeError("Year To should be a number")
      .required("Year To is required"),
    main_subject: yup.string().required("Main Subject is required"),
  });

  return (
    <Accordion sx={{ width: isMobile ? "100%" : "auto" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h3" sx={{ color: "#00abb3" }}>
          Educational Details
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: "white", p: 5 }}>
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
                <FormTextField name="level" label="Level" />
                <FormTextField name="state" label="State" />
                <FormTextField name="district" label="District" />
                <FormTextField name="university_name" label="University Name" />
                <FormTextField name="year_from" label="Year From" />
                <FormTextField name="year_to" label="Year To" />
                <FormTextField name="main_subject" label="Main Subject" />
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
