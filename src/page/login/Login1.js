import React, { useState } from "react";
import Label from "../../component/Label";
import { useNavigate } from "react-router-dom";

function Login1() {
  const [Inputanemail, setInputanemail] = useState("");
  const [InputanPass, setInputanPass] = useState("");
  const navigate = useNavigate();
  const Berubahemail = (berubahemail) => {
    setInputanemail(berubahemail.target.value);
  };
  const berubahPass = (berubahPassword) => {
    setInputanPass(berubahPassword.target.value);
  };
  const form1 = (hasil) => {
    const emailRegis = localStorage.getItem("email");
    const passRegis = localStorage.getItem("password");

    // let mengubahisiGet = [];
    // if (Inputanemail === "") {
    //   mengubahisiGet.push(localStorage.getItem("email"));
    // }
    // if (InputanPass === "") {
    //   mengubahisiGet.push(localStorage.getItem("password"));
    // }

    let mengubahIsi = [];
    if (Inputanemail === "") {
      mengubahIsi.push("email");
    }
    if (InputanPass === "") {
      mengubahIsi.push("password");
    }

    if (mengubahIsi.length === 0) {
      if (Inputanemail === emailRegis) {
        if (InputanPass === passRegis) {
          navigate("/halamanutama");
        } else {
          alert(`email dan password tidak sesuai`);
        }
      } else if (InputanPass === passRegis) {
        if (Inputanemail === emailRegis) {
          navigate("/halamanutama");
        } else {
          alert(`email dan password tidak sesuai`);
        }
      } else {
        alert(`email dan password tidak sesuai`);
      }
    } else {
      alert(mengubahIsi + ` tidak boleh kosng!`);
    }
  };
  return (
    <div>
      <form onSubmit={form1}>
        <h1> Belajar Itu menyenangkan</h1>
        <h2> kuy berlangganan</h2>
        <Label judul="Email" type="text" value={Inputanemail} name="email" onChange={Berubahemail} />
        <Label judul="Password" type="password" value={InputanPass} name="password" onChange={berubahPass} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login1;
