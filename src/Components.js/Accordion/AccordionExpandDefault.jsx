import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "../Buttonaccordion/Buttonaccordion";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Buttonaccordion from "../Buttonaccordion/Buttonaccordion";
import styles from "./AccordionConainer.module.css";

export default function AccordionExpandDefault({Q}) {
  return (
    <Accordion
      style={{
        background: "#110f0f0f",
        color: "white",
        borderBottom: "1px solid #d9d9d93c",
      }}
    >
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        expandIcon={<Buttonaccordion />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>{Q}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={styles.detail}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
