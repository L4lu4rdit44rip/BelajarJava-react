import React from "react";

function InputAngkanya(prop) {
  return (
    <div>
      <label>{prop.judul}</label>
      <input type={prop.type} value={prop.value} className={prop.className} onChange={prop.onChange}></input>
    </div>
  );
}
export default InputAngkanya;
