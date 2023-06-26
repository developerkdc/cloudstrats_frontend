import Div from "@jumbo/shared/Div/Div";
import { Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import IndividualDossierTable from "./IndividualDossierList";
import { useNavigate } from "react-router-dom";

const Individual_Dossier = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <Div
      sx={
        isMobile
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }
          : {}
      }
    >
      <Typography variant="h1">Individual Unit Dashboard</Typography>
      <Div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt:2
        }}
      >
        <Div sx={{ display: "flex", width: isMobile ? "100%" : null }}>
          <Button
            variant="contained"
            sx={{
              fontSize: isMobile ? "8px" : "inherit",
              margin: "0.5rem",
              lineHeight: isMobile ? 1.2 : "inherit",
              p: isMobile ? 0.5 : null,
            }}
          >
            Refresh
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: isMobile ? "8px" : "inherit",
              margin: "0.5rem",
              lineHeight: isMobile ? 1.2 : "inherit",
              p: isMobile ? 0.5 : null,
            }}
          >
            Search Individual Dossier
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: isMobile ? "8px" : "inherit",
              margin: "0.5rem",
              lineHeight: isMobile ? 1.2 : "inherit",
              p: isMobile ? 0.5 : null,
            }}
          >
            Face Search
          </Button>
        </Div>
        <Div>
          <Button
            onClick={()=>{navigate('/add_individual')}}
            variant="contained"
            sx={{
              fontSize: isMobile ? "8px" : "inherit",
              margin: "0.5rem",
              lineHeight: isMobile ? 1.2 : "inherit",
              p: isMobile ? 0.5 : null,
            }}
          >
            Add Individual Dossier
          </Button>
        </Div>
      </Div>
      <Div sx={isMobile ? { maxWidth: "100%" ,mt:3} : {mt:5}}>
        <IndividualDossierTable />
      </Div>
    </Div>
  );
};

export default Individual_Dossier;
