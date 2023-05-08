import React from "react";
import "./Textkomponen.css";

function Textkomponen(prop) {
  return <div className="warna">kucing dan {prop.text}</div>;
}
export default Textkomponen;
