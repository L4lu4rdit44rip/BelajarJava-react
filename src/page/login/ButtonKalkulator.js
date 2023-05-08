import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function ButtonKalkulator() {
  // const [hasilKlic, setHasilKlick] = useState(0)
  const [hasil1, setHasil] = useState(0);
  const navigate = useNavigate();
  const hasil = (berubah) => {
    setHasil(berubah.target.value);
  };

  function berubahLah(oprasi) {
    const intInput = parseInt(oprasi);
    setHasil(intInput % 2);
    // ganjil
    if (intInput % 2 !== 0) {
      if (intInput % 2 !== 1) {
        setHasil(hasil1 + intInput * -1);
      } else if (intInput % 2 !== -1) {
        setHasil(hasil1 + intInput * -1);
      }
      //genap dan 0
    } else if (intInput % 2 !== 1) {
      if (intInput !== 0) {
        setHasil(intInput * 2 + hasil1);
      } else {
        setHasil(0);
      }
    }
  }
  const form1 = (hasil) => {
    navigate("/");
    // alert(`Selamat datang ${Inputanemail}`);
  };

  return (
    <div>
      <form onSubmit={form1}>
        <p type="number" value={hasil1} className="hasil1" onChange={hasil}>
          {hasil1}
        </p>
        <button onClick={() => berubahLah("-5")} type="button">
          -5
        </button>
        <button onClick={() => berubahLah("-4")} type="button">
          -4
        </button>
        <button onClick={() => berubahLah("-3")} type="button">
          -3
        </button>
        <button onClick={() => berubahLah("-2")} type="button">
          -2
        </button>
        <button onClick={() => berubahLah("-1")} type="button">
          -1
        </button>
        <button onClick={() => berubahLah("0")} type="button">
          0
        </button>
        <button onClick={() => berubahLah("1")} type="button">
          1
        </button>
        <button onClick={() => berubahLah("2")} type="button">
          2
        </button>
        <button onClick={() => berubahLah("3")} type="button">
          3
        </button>
        <button onClick={() => berubahLah("4")} type="button">
          4
        </button>
        <button onClick={() => berubahLah("5")} type="button">
          5
        </button>
        <button type="submite">back to Registrasi</button>
      </form>
    </div>
  );
}
export default ButtonKalkulator;
