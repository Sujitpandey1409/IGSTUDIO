import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "../Buttonaccordion/Buttonaccordion";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Buttonaccordion from "../Buttonaccordion/Buttonaccordion";
import styles from "./AccordionConainer.module.css";

export default function AccordionExpandDefault({Q}) {
  const [sign, setSign] = useState(true)
    const [signVal, setSignVal] = useState('+')
    useEffect(()=>{
        sign?setSignVal('+'):setSignVal('-')
    },[sign])
  return (
    <Accordion
      onClick={()=>setSign(!sign)}
      style={{
        background: "#110f0f0f",
        color: "white",
        borderBottom: "1px solid #d9d9d93c",
      }}
    >
      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        expandIcon={<Buttonaccordion signVal={signVal} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>{Q}</Typography>
      </AccordionSummary>
      <AccordionDetails onClick = {(event) => event.stopPropagation()}>
        <Typography className={styles.detail}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
