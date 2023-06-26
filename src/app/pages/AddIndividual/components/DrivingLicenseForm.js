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

export default function DrivingLicenseForm() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const user = {
    driving_license_number: "MH0140196242211",
    name_on_driving_license: "Rehan Pathan",
    place_of_issue: "Mumbai Central",
    date_of_issue: "12-29-2000",
    address_on_driving_license: "Mumbai Central",
    dob_on_driving_license: "12-29-2000",
    driving_license_type: "MCWG",
  };

  const initialValues = {
    driving_license_number: "",
    name_on_driving_license: "",
    place_of_issue: "",
    date_of_issue: "",
    address_on_driving_license: "",
    dob_on_driving_license: "",
    driving_license_type: "",
  };

  const validationSchema = yup.object({
    driving_license_number: yup
      .string()
      .required("Driving License Number is required"),
    name_on_driving_license: yup.string().required("Name is required"),
    place_of_issue: yup.string().required("Place is required"),
    date_of_issue: yup.string().required("Date of Issue is required"),
    address_on_driving_license: yup.string().required("Address is required"),
    dob_on_driving_license: yup.string().required("Date of Birth is required"),
    driving_license_type: yup.string().required("Driving License is required"),
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h3" sx={{ color: "#00abb3" }}>
          Driving License Details
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
                <FormTextField
                  name="driving_license_number"
                  label="Driving License Number"
                />
                <FormTextField
                  name="name_on_driving_license"
                  label="Name On Driving License"
                />
                <FormTextField name="place_of_issue" label="Place Of Issue" />

                <Div sx={outerDiv}>
                  <Typography variant="h5">Date Of Issue</Typography>
                  <DatePickerInput
                    defaultValue={parse(
                      user.date_of_issue,
                      "MM-dd-yyyy",
                      new Date()
                    )}
                    onChange={(date) => setFieldValue("date_of_issue", date)}
                    className="my-custom-datepicker-component"
                  />
                  <Div sx={{ height: "30px" }}>
                    <ErrorMessage
                      name="date_of_issue"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Div>
                </Div>

                <FormTextField
                  name="address_on_driving_license"
                  label="Address On Driving License"
                />

                <Div sx={outerDiv}>
                  <Typography variant="h5">
                    Date Of Birth On Driving License
                  </Typography>
                  <DatePickerInput
                    defaultValue={parse(
                      user.dob_on_driving_license,
                      "MM-dd-yyyy",
                      new Date()
                    )}
                    onChange={(date) =>
                      setFieldValue("dob_on_driving_license", date)
                    }
                    className="my-custom-datepicker-component"
                  />
                  <Div sx={{ height: "30px" }}>
                    <ErrorMessage
                      name="dob_on_driving_license"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Div>
                </Div>

                <FormTextField
                  name="driving_license_type"
                  label="Driving License Type"
                />
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
