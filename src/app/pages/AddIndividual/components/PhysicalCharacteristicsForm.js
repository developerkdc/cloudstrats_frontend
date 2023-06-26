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
import {
  beard,
  beardlist,
  bloodGrouplist,
  bodyPartsList,
  eyeColorlist,
  heightList,
  identificationList,
  outerDiv,
  weightList,
} from "@jumbo/constants/constants";
import { parse } from "date-fns";
import ArrayInputField from "app/components/ArrayInputField";
import ListOptions from "app/components/ListOptions";

export default function PhysicalCharacteristicsForm() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const user = {
    height_in_cms: "5 Feet 4 Inch - 5 Feet 6 Inch",
    weight_in_kgs: "51-55",
    identification_details: [
      {
        identification_mark: "",
        body_part: "",
      },
    ],
    blood_group: "AB+",
    color_of_eyes: "Brown",
    beard: "Cleaned shave",
  };
  const initialValues = {
    height_in_cms: "",
    weight_in_kgs: "",
    identification_details: [
      {
        identification_mark: "",
        body_part: "",
      },
    ],
    blood_group: "",
    color_of_eyes: "",
    beard: "",
  };

  const validationSchema = yup.object({
    height_in_cms: yup.string().required("Height is required"),
    weight_in_kgs: yup.string().required("Weight is required"),
    blood_group: yup.string().required("Blood Group is required"),
    color_of_eyes: yup.string().required("Color of Eyes is required"),
    beard: yup.string().required("Beard is required"),
  });

  return (
    <Accordion sx={{ width: isMobile ? "100%" : "auto" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h3" sx={{ color: "#00abb3" }}>
          Physical Characteristics
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
                <ListOptions
                  name="height_in_cms"
                  label="Height in Cms"
                  options={heightList}
                />

                <ListOptions
                  name="weight_in_kgs"
                  label="Weight in Kgs"
                  options={weightList}
                />

                <ListOptions
                  name="blood_group"
                  label="Blood Group"
                  options={bloodGrouplist}
                />

                <ListOptions
                  name="color_of_eyes"
                  label="Color Of Eyes"
                  options={eyeColorlist}
                />

                <ListOptions name="beard" label="Beard" options={beardlist} />

                <Div sx={{ width: "50%" }}>
                  {values.identification_details.map((detail, index) => (
                    <Div key={index} sx={{ display: "flex" }}>
                      <ListOptions
                        name={`identification_details[${index}].identification_mark`}
                        label="Identification Mark"
                        options={identificationList}
                      />
                      <ListOptions
                        name={`identification_details[${index}].body_part`}
                        label="Body Part"
                        options={bodyPartsList}
                      />
                      {values.identification_details.length > 1 && (
                        <Button
                          variant="text"
                          color="secondary"
                          sx={{
                            padding: "0px 0px",
                            fontSize: "12px",
                            minWidth: "unset",
                            minHeight: "unset",
                          }}
                          onClick={() => {
                            const updatedDetails = [
                              ...values.identification_details,
                            ];
                            updatedDetails.splice(index, 1);
                            setFieldValue(
                              "identification_details",
                              updatedDetails
                            );
                          }}
                        >
                          Remove
                        </Button>
                      )}
                    </Div>
                  ))}
                  <Div
                    sx={{ display: "flex", justifyContent: "center", mt: -2 }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ width: "40%", p: 0 }}
                      onClick={() => {
                        const updatedDetails = [
                          ...values.identification_details,
                          { identification_mark: "", body_part: "" },
                        ];
                        setFieldValue("identification_details", updatedDetails);
                      }}
                    >
                      Add Identification Detail
                    </Button>
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
