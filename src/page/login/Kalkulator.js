import React, { useState } from "react";
import InputAngkanya from "../../component/TextField/InputAngka";

function Kalkulator() {
  const [inputAngka1, setInputAngka1] = useState(0);
  const [inputAngka2, setInputAngka2] = useState(0);
  const [hasil1, setHasil] = useState(0);

  const angka1 = (beubah1) => {
    setInputAngka1(beubah1.target.value);
  };
  const angka2 = (beubah2) => {
    setInputAngka2(beubah2.target.value);
  };

  const hasil = (berubah) => {
    setHasil(berubah.target.value);
  };

  function perhitungan(oprasi) {
    const intAngka1 = parseInt(inputAngka1);
    const intAngka2 = parseInt(inputAngka2);
    if (oprasi === "kali") {
      setHasil(intAngka1 * intAngka2);
    } else if (oprasi === "bagi") {
      setHasil(intAngka1 / intAngka2);
    } else if (oprasi === "tambah") {
      setHasil(intAngka1 + intAngka2);
    } else if (oprasi === "kurang") {
      setHasil(intAngka1 - intAngka2);
    } else if (oprasi === "mod") {
      setHasil(intAngka1 % intAngka2);
    }
  }
  //   function xKali(e) {
  //     e.preventDefault();
  //     const intAngka1 = parseInt(inputAngka1);
  //     const intAngka2 = parseInt(inputAngka2);
  //     setHasil(intAngka1 * intAngka2);
  //   }
  //   function xBagi(e) {
  //     e.preventDefault();
  //     const intAngka1 = parseInt(inputAngka1);
  //     const intAngka2 = parseInt(inputAngka2);
  //     setHasil(intAngka1 / intAngka2);
  //   }
  //   function xTambah(e) {
  //     e.preventDefault();
  //     console.log(typeof inputAngka1);
  //     const intAngka1 = parseInt(inputAngka1);
  //     const intAngka2 = parseInt(inputAngka2);
  //     setHasil(intAngka1 + intAngka2);
  //   }
  //   function xKurang(e) {
  //     e.preventDefault();
  //     console.log(typeof inputAngka1);
  //     const intAngka1 = parseInt(inputAngka1);
  //     const intAngka2 = parseInt(inputAngka2);
  //     setHasil(intAngka1 - intAngka2);
  //   }

  return (
    <div>
      <form>
        <InputAngkanya judul="Angka Pertama" type="number" value={inputAngka1} className="AngkaPertama" onChange={angka1}></InputAngkanya>
        <InputAngkanya judul="Angka Kedua" type="number" value={inputAngka2} className="AngkaKedua" onChange={angka2}></InputAngkanya>
        <p type="number" value={hasil1} className="hasil1" onChange={hasil}>
          {hasil1}
        </p>
        <button onClick={() => perhitungan("tambah")} type="button">
          Tambah
        </button>
        <button onClick={() => perhitungan("kurang ")} type="button">
          Kurang
        </button>
        <button onClick={() => perhitungan("Bagi")} type="button">
          Bagi
        </button>
        <button onClick={() => perhitungan("kali")} type="button">
          kali
        </button>
        <button onClick={() => perhitungan("mod")} type="button">
          modulus
        </button>
      </form>
    </div>
  );
}
export default Kalkulator;
