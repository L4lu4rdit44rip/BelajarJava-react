import { Button } from "@mui/material";
import React from "react";

function Buttons(props) {
  return (
    <Button type={props.type} variant={props.variant} fullWidth={props.fullWidth} sx={{ mt: 2, nb: 2 }}>
      {props.label}
    </Button>
  );
}
export default Buttons;
