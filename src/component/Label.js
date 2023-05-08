// import React, { useState } from "react";
import React from "react";
function Label(prop) {
  //   const [InputanUser, setInputanUser] = useState("");
  //   const Berubah = (berubah2) => {
  //     // console.log(berubah2.target.value);
  //     setInputanUser(berubah2.target.value);
  //   };
  return (
    <div>
      <label>{prop.judul}</label>
      <input type={prop.type} value={prop.value} name={prop.name} onChange={prop.onChange}></input>
    </div>
  );
}
export default Label;
