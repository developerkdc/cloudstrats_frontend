import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as yup from "yup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Div from "@jumbo/shared/Div/Div";
import JumboAppTextField from "@jumbo/components/JumboAppTextField/JumboAppTextField";

export default function PreliminaryForm() {
  const outerDiv = {
    display: "flex",
    width: "50%",
    flexDirection: "column",
    paddingLeft: 2,
    paddingRight: 2,
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const user = {
    accused_name: "Rehan Pathan",
    branch: "Mumbai (Maharashtra)",
    district: "dfgfdg",
    category: "NDPS",
    investigation_officer: "fdgdgd",
    unit_id: "424",
    daw_id: "2432",
  };

  const initialValues = {
    accused_name: "",
    branch: "",
    district: "",
    category: "",
    investigation_officer: "",
    unit_id: "",
    daw_id: "",
  };

  const validationSchema = yup.object({
    accused_name: yup.string().required("Name is required"),
    branch: yup.string().required("Branch is required"),
    district: yup.string().required("District is required"),
    category: yup.string().required("Category is required"),
    investigation_officer: yup
      .string()
      .required("Investigation Officer Name is required"),
    unit_id: yup.string().required("Unit Id is required"),
    daw_id: yup.string().required("Daw Id is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Accordion sx={{ bgcolor: "#eaeaea" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ m: 0, height: isMobile ? "auto" : "10px" }}
      >
        <Typography variant="h3">Preliminary Details</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: "white", p: 5 }}>
        <Accordion sx={{ width: isMobile ? "100%" : "auto" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h3" sx={{ color: "#00abb3" }}>
              Preliminary Details
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
              {(formikProps) => (
                <Form noValidate autoComplete="off">
                  <Div
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Div sx={outerDiv}>
                      <Typography variant="h5">Accused Name:</Typography>
                      <JumboAppTextField
                        type="text"
                        id="accused_name"
                        name="accused_name"
                        variant="standard"
                        sx={{
                          width: "100%",
                          fontSize: "10px",
                        }}
                      />
                      <Div sx={{ height: "30px" }}>
                        <ErrorMessage
                          name="accused_name"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <Div sx={outerDiv}>
                      <FormControl variant="standard" fullWidth>
                        <Typography variant="h5">Branch:</Typography>
                        <Field
                          as={Select}
                          variant="standard"
                          labelId="branch-label"
                          id="branch"
                          name="branch"
                          MenuProps={{
                            sx: {
                              "&& .Mui-selected": {
                                backgroundColor: "#b2b2b2",
                              },
                              "&& .Mui-hover": {
                                backgroundColor: "#b2b2b2",
                              },
                            },
                          }}
                        >
                          <MenuItem
                            value="Mumbai (Maharashtra)"
                            sx={{ bgcolor: "white" }}
                          >
                            Mumbai (Maharashtra)
                          </MenuItem>
                          <MenuItem value="Ahmedabad" sx={{ bgcolor: "white" }}>
                            Ahmedabad
                          </MenuItem>
                          <MenuItem value="Lucknow" sx={{ bgcolor: "white" }}>
                            Lucknow
                          </MenuItem>
                          <MenuItem value="Rajasthan" sx={{ bgcolor: "white" }}>
                            Rajasthan
                          </MenuItem>
                          <MenuItem value="Bihar" sx={{ bgcolor: "white" }}>
                            Bihar
                          </MenuItem>
                        </Field>
                      </FormControl>
                      <Div style={{ height: "30px" }}>
                        <ErrorMessage
                          name="branch"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <Div sx={outerDiv}>
                      <Typography variant="h5">
                        District/Commissionerate
                      </Typography>
                      <JumboAppTextField
                        type="text"
                        id="district"
                        name="district"
                        variant="standard"
                      />
                      <Div sx={{ height: "30px" }}>
                        <ErrorMessage
                          name="district"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <Div sx={outerDiv}>
                      <FormControl variant="standard" fullWidth>
                        <Typography variant="h5">Category:</Typography>
                        <Field
                          as={Select}
                          variant="standard"
                          labelId="category-label"
                          id="category"
                          name="category"
                          MenuProps={{
                            sx: {
                              "&& .Mui-selected": {
                                backgroundColor: "#b2b2b2",
                              },
                              "&& .Mui-hover": {
                                backgroundColor: "#b2b2b2",
                              },
                            },
                          }}
                        >
                          <MenuItem value="UAPA" sx={{ bgcolor: "white" }}>
                            UAPA
                          </MenuItem>
                          <MenuItem value="NDPS" sx={{ bgcolor: "white" }}>
                            NDPS
                          </MenuItem>
                          <MenuItem value="FICN" sx={{ bgcolor: "white" }}>
                            FICN
                          </MenuItem>
                          <MenuItem value="ARMS" sx={{ bgcolor: "white" }}>
                            ARMS
                          </MenuItem>
                          <MenuItem
                            value="Organisation Member"
                            sx={{ bgcolor: "white" }}
                          >
                            Organisation Member
                          </MenuItem>
                          <MenuItem
                            value="Other Cases"
                            sx={{ bgcolor: "white" }}
                          >
                            Other Cases
                          </MenuItem>
                        </Field>
                      </FormControl>
                      <Div style={{ height: "30px" }}>
                        <ErrorMessage
                          name="category"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <Div sx={outerDiv}>
                      <Typography variant="h5">
                        Investigation Officer
                      </Typography>
                      <JumboAppTextField
                        type="text"
                        id="investigation_officer"
                        name="investigation_officer"
                        variant="standard"
                      />
                      <Div sx={{ height: "30px" }}>
                        <ErrorMessage
                          name="investigation_officer"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <Div sx={outerDiv}>
                      <Typography variant="h5">Unit Id</Typography>
                      <Div sx={{ display: "flex", gap: 1 }}>
                        <JumboAppTextField
                          type="text"
                          id="unit_id"
                          name="unit_id"
                          variant="standard"
                          inputProps={{ style: { textAlign: "center" } }}
                          sx={{ width: "40%" }}
                        />
                        <Typography variant="h3"> &#8212;</Typography>
                        <JumboAppTextField
                          type="text"
                          id="unit_id"
                          name="unit_id"
                          variant="standard"
                          inputProps={{
                            maxLength: 1,
                            style: { textAlign: "center" },
                          }}
                          sx={{ width: "10%" }}
                        />
                        <Typography variant="h3"> &#8212;</Typography>
                        <JumboAppTextField
                          type="text"
                          id="unit_id"
                          name="unit_id"
                          variant="standard"
                          inputProps={{ style: { textAlign: "center" } }}
                          sx={{ width: "40%" }}
                        />
                      </Div>
                      <Div sx={{ height: "30px" }}>
                        <ErrorMessage
                          name="unit_id"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <Div sx={outerDiv}>
                      <Typography variant="h5">DAW Id</Typography>

                      <Div sx={{ display: "flex", gap: 1 }}>
                        <JumboAppTextField
                          type="text"
                          id="daw_id"
                          name="daw_id"
                          variant="standard"
                          inputProps={{ style: { textAlign: "center" } }}
                          sx={{ width: "40%" }}
                        />
                        <Typography variant="h3"> &#8212;</Typography>
                        <JumboAppTextField
                          type="text"
                          id="daw_id"
                          name="daw_id"
                          variant="standard"
                          inputProps={{
                            maxLength: 1,
                            style: { textAlign: "center" },
                          }}
                          sx={{ width: "10%" }}
                        />
                        <Typography variant="h3"> &#8212;</Typography>
                        <JumboAppTextField
                          type="text"
                          id="daw_id"
                          name="daw_id"
                          variant="standard"
                          inputProps={{ style: { textAlign: "center" } }}
                          sx={{ width: "40%" }}
                        />
                      </Div>
                      <Div sx={{ height: "30px" }}>
                        <ErrorMessage
                          name="daw_id"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                      {/* Add other fields and error messages as needed */}
                    </Div>
                  </Div>
                  <Div sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ mb: 3 }}
                    >
                      Save
                    </Button>
                  </Div>
                </Form>
              )}
            </Formik>
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
}
