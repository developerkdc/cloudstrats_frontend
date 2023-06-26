import React from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import Div from "@jumbo/shared/Div/Div";
import JailProformaTable from "./JailProformaList";
const Jail_Proforma = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
      <Typography variant="h1">Organizational Unit Dashboard</Typography>
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
        </Div>
        <Div>
          <Button
            variant="contained"
            sx={{
              fontSize: isMobile ? "8px" : "inherit",
              margin: "0.5rem",
              lineHeight: isMobile ? 1.2 : "inherit",
              p: isMobile ? 0.5 : null,
            }}
          >
            Add Jail Proforma
          </Button>
        </Div>
      </Div>
      <Div sx={isMobile ? { maxWidth: "100%" ,mt:3} : {mt:5}}>
        <JailProformaTable />
      </Div>
    </Div>
  );
};

export default Jail_Proforma;
