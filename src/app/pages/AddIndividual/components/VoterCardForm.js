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

export default function VoterCardForm() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const user = {
    voter_id_number: "NFP6562456",
    name_on_voter_card: "Rehan Pathan",
    place_of_issue: "Mumbai",
    date_of_issue: "12-29-2000",
    dob_on_voter_id: "12-29-2000",
    voters_age: 22,
    name_of_constituency: "Indian Institute Of Technology",
  };

  const initialValues = {
    voter_id_number: "",
    name_on_voter_card: "",
    place_of_issue: "",
    date_of_issue: "",
    dob_on_voter_id: "",
    voters_age: "",
    name_of_constituency: "",
  };

  const validationSchema = yup.object({
    voter_id_number: yup.string().required("Voter Id is required"),
    name_on_voter_card: yup.string().required("Name On Voter Card is required"),
    place_of_issue: yup.string().required("Place Of Issue is required"),
    date_of_issue: yup.string().required("Date Of Issue is required"),
    dob_on_voter_id: yup.string().required("DOB On Voter Id is required"),
    voters_age: yup
      .number()
      .typeError("Age Should Be A Number")
      .required("Voters Age is required"),
    name_of_constituency: yup
      .string()
      .required("Name Of Constituency is required"),
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h3" sx={{ color: "#00abb3" }}>
          Voter Card Details
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
                <FormTextField name="voter_id_number" label="Voter Id Number" />
                <FormTextField
                  name="name_on_voter_card"
                  label="Name On Voter Card"
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

                <Div sx={outerDiv}>
                  <Typography variant="h5">DOB On Voter Id</Typography>
                  <DatePickerInput
                    defaultValue={parse(
                      user.dob_on_voter_id,
                      "MM-dd-yyyy",
                      new Date()
                    )}
                    onChange={(date) => setFieldValue("dob_on_voter_id", date)}
                    className="my-custom-datepicker-component"
                  />
                  <Div sx={{ height: "30px" }}>
                    <ErrorMessage
                      name="dob_on_voter_id"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Div>
                </Div>
                <FormTextField name="voters_age" label="Voter's Age" />
                <FormTextField
                  name="name_of_constituency"
                  label="Name Of Constituency"
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
