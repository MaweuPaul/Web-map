import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Alert } from "@mui/material";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Alert variant="filled" severity="info" sx={{ width: "100%" }}>
            to note
          </Alert>
        </AccordionSummary>
        <AccordionDetails>
          <ol style={{ marginLeft: "2rem" }}>
            <li>
              only the map layer or the layer which originaly loads can search
              for locations
            </li>
            <li>
              find my location works only in street view and in satelite view
            </li>
          </ol>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
