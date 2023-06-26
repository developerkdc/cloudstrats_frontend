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
import { Form, Formik } from "formik";
import FormTextField from "app/components/FormTextField";
import * as yup from "yup";

export default function AddressForm() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const user = {
    present_address:
      "46/48 Tabib Manzil,1st floor,rm no 8, Zakaria Masjid Street,Mumbai:400009",
    local_police_station_present: "Mandvi Police Chowki",
    permanent_address:
      "46/48 Tabib Manzil,1st floor,rm no 8, Zakaria Masjid Street,Mumbai:400009",
    local_police_station_permanent: "Dongri Police Chowki",
    office_address: "Ghatkopar",
    office_contact_number: 8945632586,
    other_address:
      "46/48 Tabib Manzil,1st floor,rm no 8, Zakaria Masjid Street,Mumbai:400009",
    concerned_police_station: "Mandvi Police Chowki",
  };
  const initialValues = {
    present_address: "",
    local_police_station_present: "",
    permanent_address: "",
    local_police_station_permanent: "",
    office_address: "",
    office_contact_number: "",
    other_address: "",
    concerned_police_station: "",
  };

  const validationSchema = yup.object({
    present_address: yup.string().required("Present Address is required"),
    local_police_station_present: yup
      .string()
      .required("Local Police Station is required"),
    permanent_address: yup.string().required("Permanent Address is required"),
    local_police_station_permanent: yup
      .string()
      .required("Local Police Station is required"),
    office_address: yup.string().required("Office Address is required"),
    office_contact_number: yup
      .string()
      .required("Office Contact Number is required"),
    other_address: yup.string().required("Other Address is required"),
    concerned_police_station: yup
      .string()
      .required("Concerned Police Station is required"),
  });

  return (
    <Accordion sx={{ width: isMobile ? "100%" : "auto" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h3" sx={{ color: "#00abb3" }}>
          Address Details
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
                <FormTextField name="present_address" label="Present Address" />
                <FormTextField
                  name="local_police_station_present"
                  label="Local Police Station"
                />
                <FormTextField
                  name="permanent_address"
                  label="Permanent Of Address"
                />
                <FormTextField
                  name="local_police_station_permanent"
                  label="Local Police Station For Permanent Address"
                />
                <FormTextField name="office_address" label="Office Address" />
                <FormTextField
                  name="office_contact_number"
                  label="Office Contact Number"
                />
                <FormTextField name="other_address" label="Other Address" />
                <FormTextField
                  name="concerned_police_station"
                  label="Concerned Police Station"
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
