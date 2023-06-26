import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as yup from "yup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ErrorMessage, Form, Formik } from "formik";
import Div from "@jumbo/shared/Div/Div";
import FormTextField from "app/components/FormTextField";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import { outerDiv } from "@jumbo/constants/constants";
import { parse } from "date-fns";

export default function MedicalForm() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const user = {
    name_of_hospital: "Lilavati Hospital",
    disease: "Malaria",
    name_of_doctor: "Dr Pillai MBBS",
    date_of_visit: "12-29-2000",
    medical_report_document: "/uploads/medicalupload",
  };

  const initialValues = {
    name_of_hospital: "",
    disease: "",
    name_of_doctor: "",
    date_of_visit: "",
    medical_report_document: "",
  };

  const validationSchema = yup.object({
    name_of_hospital: yup.string().required("Name Of Hospital is required"),
    disease: yup.string().required("Disease is required"),
    name_of_doctor: yup.string().required("Doctor Name is required"),
    date_of_visit: yup.string().required("Date of Visit is required"),
    medical_report_document: yup
      .mixed()
      .test("fileType", "Invalid file type", (value) => {
        // Check if a file is selected
        if (!value) {
          return false;
        }

        // Get the file type
        const fileType = value.type;

        // Define the allowed file types
        const allowedFileTypes = ["application/pdf"];

        // Check if the file type is allowed
        return allowedFileTypes.includes(fileType);
      }),
  });

  return (
    <Accordion sx={{ width: isMobile ? "100%" : "auto" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h3" sx={{ color: "#00abb3" }}>
          Medical Details
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
          {({ values, setFieldValue, form, meta }) => (
            <Form noValidate autoComplete="off">
              <Div
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                }}
              ></Div>
              <Div sx={{ display: "flex", justifyContent: "center" }}>
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
