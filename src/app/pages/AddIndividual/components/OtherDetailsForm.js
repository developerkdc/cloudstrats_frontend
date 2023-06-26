import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Formik, FieldArray, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import JumboAppTextField from "@jumbo/components/JumboAppTextField/JumboAppTextField";
import Div from "@jumbo/shared/Div/Div";
import { outerDiv } from "@jumbo/constants/constants";

export default function OtherDetailsForm() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const user = {
    language_known: ["hindi"],
    properties_owned: ["hindiiiii", "masti"],
  };
  const initialValues = {
    language_known: [],
    properties_owned: [],
  };

  const validationSchema = yup.object({
    language_known: yup
      .array()
      .of(yup.string())
      .required("Language Known is required"),
    properties_owned: yup
      .array()
      .of(yup.string())
      .required("Properties Owned is required"),
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h3" sx={{ color: "#00abb3" }}>
          Other Details
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
              <Div sx={{ display: "flex" }}>
                <Div sx={outerDiv}>
                  <Typography variant="h5">Languages Known</Typography>
                  <FieldArray name="language_known">
                    {({ push, remove }) => (
                      <Div>
                        {values.language_known.map((language, index) => (
                          <Div key={index}>
                            <JumboAppTextField
                              name={`language_known.${index}`}
                              variant="standard"
                              sx={{
                                width: "100%",
                                fontSize: "10px",
                              }}
                            />
                            <ErrorMessage
                              name={`language_known.${index}`}
                              component="div"
                            />
                            <Button
                              type="button"
                              sx={{ fontSize: "10px" }}
                              onClick={() => remove(index)}
                            >
                              Remove
                            </Button>
                          </Div>
                        ))}
                        <Button type="button" onClick={() => push("")}>
                          Add Language
                        </Button>
                      </Div>
                    )}
                  </FieldArray>
                </Div>

                <Div sx={outerDiv}>
                  <Typography variant="h5">Properties Owned</Typography>
                  <FieldArray name="properties_owned">
                    {({ push, remove }) => (
                      <Div>
                        {values.properties_owned.map((property, index) => (
                          <Div key={index}>
                            <JumboAppTextField
                              multiline
                              name={`properties_owned.${index}`}
                              variant="standard"
                              sx={{
                                width: "100%",
                                fontSize: "10px",
                              }}
                            />
                            <ErrorMessage
                              name={`properties_owned.${index}`}
                              component="div"
                            />
                            <Button
                              type="button"
                              sx={{ fontSize: "10px" }}
                              onClick={() => remove(index)}
                            >
                              Remove
                            </Button>
                          </Div>
                        ))}
                        <Button type="button" onClick={() => push("")}>
                          Add Property
                        </Button>
                      </Div>
                    )}
                  </FieldArray>
                </Div>
              </Div>

              <Div style={{ display: "flex", justifyContent: "center" }}>
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
