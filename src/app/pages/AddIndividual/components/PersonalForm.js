import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as yup from "yup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Div from "@jumbo/shared/Div/Div";
import JumboAppTextField from "@jumbo/components/JumboAppTextField/JumboAppTextField";
import MedicalForm from "./MedicalForm";
import PhysicalCharacteristicsForm from "./PhysicalCharacteristicsForm";
import AddressForm from "./AddressForm";
import EducationalForm from "./EducationalForm";
import OtherDetailsForm from "./OtherDetailsForm";
import DrivingLicenseForm from "./DrivingLicenseForm";
import PanCardForm from "./PanCardForm";
import VoterCardForm from "./VoterCardForm";
import AadharCardForm from "./AadharCardForm";
import RationCardForm from "./RationCardForm";
import PassportForm from "./PassportForm";
import BankAccountForm from "./BankAccountForm";
import CreditCardForm from "./CreditCardForm";
import OtherIdCardForm from "./OtherIdCardForm";
import VehicleForm from "./VehicleForm";
import CloseFamilyForm from "./CloseFamilyForm";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import DeleteIcon from "@mui/icons-material/Delete";
import FormTextField from "app/components/FormTextField";
import { outerDiv, socialNetworkOptions } from "@jumbo/constants/constants";
import ArrayInputField from "app/components/ArrayInputField";

export default function PersonalForm() {
  const [date, setDate] = useState("12-29-2000");
  const [selectedSocialNetwork, setSelectedSocialNetwork] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [alias, setAlias] = useState(["rehan", "pathan"]);
  const [mobile, setMobile] = useState([9876524678, 9863527181, 956382822]);
  const [alternateMobile, setAlternateMobile] = useState([
    9876524678, 9863527181, 956382822,
  ]);
  const [email, setEmail] = useState(["admin@gmail.com", "manager@gmail.com"]);
  const [socialIds, setSocialIds] = useState([
    {
      name: "Instagram",
      id: "rehan@gmail.com",
    },
    {
      name: "Snapchat",
      id: "rehansnap@gmail.com",
    },
  ]);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const user = {
    full_name_of_accused: "Rehan Pathan",
    fathers_full_name: "Rehan Pathan",
    alias: alias,
    gender: "male",
    nationality: "India",
    date_of_birth: date,
    marital_status: "married",
    mobile_no: mobile,
    alternate_mobile_no: alternateMobile,
    email_id: email,
    social_network_id: socialIds,
    occupation: "service",
  };

  const initialValues = {
    full_name_of_accused: "",
    fathers_full_name: "",
    alias: [],
    gender: "",
    nationality: "",
    date_of_birth: "",
    marital_status: "",
    mobile_no: [],
    alternate_mobile_no: [],
    email_id: [],
    social_network_id: [],
    occupation: "",
  };

  const validationSchema = yup.object({
    full_name_of_accused: yup.string().required("Name is required"),
    fathers_full_name: yup.string().required("Father's Name is required"),
    alias: yup.array().of(yup.string()).required("Alias is required"),
    gender: yup.string().required("Gender is required"),
    nationality: yup.string().required("Nationality is required"),
    date_of_birth: yup.string().required("Date of Birth is required"),
    marital_status: yup.string().required("Marital Status is required"),
    mobile_no: yup
      .array()
      .of(yup.number())
      .required("Mobile Number is required"),
    alternate_mobile_no: yup
      .array()
      .of(yup.number())
      .required("Alternate Mobile Number is required"),
    email_id: yup
      .array()
      .of(yup.string().email())
      .required("Email ID is required"),
    social_network_id: yup
      .array()
      .of(
        yup.object({
          name: yup.string().required("Social Network is required"),
          id: yup.string().required("Social Network ID is required"),
        })
      )
      .required("Social Network ID is required"),
    occupation: yup.string().required("Occupation is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const handleSocialNetworkChange = (e) => {
    setSelectedSocialNetwork(e.target.value);
  };

  const handleIdChange = (e) => {
    setSelectedId(e.target.value);
  };

  const handleAddSocialId = () => {
    if (selectedSocialNetwork && selectedId) {
      const socialId = {
        name: selectedSocialNetwork,
        id: selectedId,
      };
      setSocialIds([...socialIds, socialId]);
      setSelectedSocialNetwork("");
      setSelectedId("");
    }
  };

  const handleRemoveSocialId = (index) => {
    const updatedSocialIds = [...socialIds];
    updatedSocialIds.splice(index, 1);
    setSocialIds(updatedSocialIds);
  };

  return (
    <Accordion sx={{ bgcolor: "#eaeaea" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ m: 0, height: isMobile ? "auto" : "10px" }}
      >
        <Typography variant="h3">Personal Details</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ bgcolor: "white", p: 5 }}>
        <Accordion sx={{ width: isMobile ? "100%" : "auto" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h3" sx={{ color: "#00abb3" }}>
              Personal Details
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
                    <FormTextField
                      name="full_name_of_accused"
                      label="Full Name Of Accused"
                    />

                    <FormTextField
                      name="fathers_full_name"
                      label="Father's Full Name"
                    />

                    <ArrayInputField
                      name="alias"
                      label="Alias"
                      options={alias}
                      setField={setAlias}
                    />
                    <Div sx={outerDiv}>
                      <FormControl variant="standard" fullWidth>
                        <Typography variant="h5">Gender</Typography>
                        <Field
                          as={Select}
                          id="gender"
                          name="gender"
                          label="Gender"
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
                          <MenuItem value="" sx={{ bgcolor: "white" }}>
                            None
                          </MenuItem>
                          <MenuItem value="male" sx={{ bgcolor: "white" }}>
                            Male
                          </MenuItem>
                          <MenuItem value="female" sx={{ bgcolor: "white" }}>
                            Female
                          </MenuItem>
                        </Field>
                      </FormControl>

                      <Div sx={{ height: "30px" }}>
                        <ErrorMessage
                          name="gender"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <FormTextField name="nationality" label="Nationality" />

                    <Div sx={outerDiv}>
                      <Typography variant="h5">Date Of Birth</Typography>
                      <DatePickerInput
                        onChange={(date) => setDate(date)}
                        value={date}
                        className="my-custom-datepicker-component"
                      />
                      <Div sx={{ height: "30px" }}>
                        <ErrorMessage
                          name="date_of_birth"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <Div sx={outerDiv}>
                      <FormControl variant="standard">
                        <Typography variant="h5">Marital Status</Typography>
                        <Field
                          as={Select}
                          id="marital_status"
                          name="marital_status"
                          label="Marital Status"
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
                          <MenuItem value="" sx={{ bgcolor: "white" }}>
                            None
                          </MenuItem>
                          <MenuItem value="single" sx={{ bgcolor: "white" }}>
                            Single
                          </MenuItem>
                          <MenuItem value="married" sx={{ bgcolor: "white" }}>
                            Married
                          </MenuItem>
                          <MenuItem value="divorced" sx={{ bgcolor: "white" }}>
                            Divorced
                          </MenuItem>
                          <MenuItem value="widowed" sx={{ bgcolor: "white" }}>
                            Widowed
                          </MenuItem>
                        </Field>
                      </FormControl>

                      <Div sx={{ height: "30px" }}>
                        <ErrorMessage
                          name="marital_status"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <ArrayInputField
                      name="mobile_no"
                      label="Mobile No"
                      options={mobile}
                      setField={setMobile}
                    />

                    <ArrayInputField
                      name="alternate_mobile_no"
                      label="Alternate Mobile No"
                      options={alternateMobile}
                      setField={setAlternateMobile}
                    />

                    <ArrayInputField
                      name="email_id"
                      label="Email Id"
                      options={email}
                      setField={setEmail}
                    />

                    <Div sx={outerDiv}>
                      <Typography variant="h5">Social Network ID</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                          gap: 4,
                        }}
                      >
                        <FormControl sx={{ marginRight: "20px" }}>
                          <InputLabel id="social-network-select-label">
                            Name
                          </InputLabel>
                          <Select
                            labelId="social-network-select-label"
                            id="social-network-select"
                            value={selectedSocialNetwork}
                            onChange={handleSocialNetworkChange}
                            variant="standard"
                            sx={{ width: "200px" }}
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
                            {socialNetworkOptions.map((option) => (
                              <MenuItem
                                key={option}
                                value={option}
                                sx={{ bgcolor: "white" }}
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <TextField
                          id="social-id-textfield"
                          label="ID"
                          variant="standard"
                          value={selectedId}
                          onChange={handleIdChange}
                          sx={{ width: "250px" }}
                        />
                        <Button
                          variant="contained"
                          onClick={handleAddSocialId}
                          sx={{ fontSize: "10px" }}
                          color="success"
                        >
                          Add More
                        </Button>
                      </Box>

                      <Box>
                        {socialIds.map((item, index) => (
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "10px",
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{ marginRight: "10px" }}
                            >
                              {item.name}:
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ marginRight: "10px" }}
                            >
                              {item.id}
                            </Typography>
                            <Button
                              variant="outlined"
                              color="error"
                              onClick={() => handleRemoveSocialId(index)}
                              sx={{ padding: 0, minWidth: "10px" }}
                            >
                              <DeleteIcon sx={{ width: "20px" }} />
                            </Button>
                          </Box>
                        ))}
                      </Box>

                      <Div sx={{ height: "30px" }}>
                        <ErrorMessage
                          name="social_network_id"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </Div>
                    </Div>

                    <FormTextField name="occupation" label="Occupation" />
                  </Div>
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

        <MedicalForm />
        <PhysicalCharacteristicsForm />
        <AddressForm />
        <EducationalForm />
        <OtherDetailsForm />
        <DrivingLicenseForm />
        <PanCardForm />
        <VoterCardForm />
        <AadharCardForm />
        <RationCardForm />
        <PassportForm />
        <BankAccountForm />
        <CreditCardForm />
        <OtherIdCardForm />
        <VehicleForm />
        <CloseFamilyForm />
      </AccordionDetails>
    </Accordion>
  );
}
