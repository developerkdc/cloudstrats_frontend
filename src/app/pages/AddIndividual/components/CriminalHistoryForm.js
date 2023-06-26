import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function CriminalHistoryForm() {
    return (
        <Accordion sx={{ bgcolor: "#eaeaea" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h3">Criminal History of the Accused</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{bgcolor:"white"}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
}
