import React, { useState } from "react";
import Label from "../../component/Label";
// import InputBaru from "../../component/TextField/InputBaru";
import { useNavigate } from "react-router-dom";

function Registrasi() {
  const [Inputanndepan, setInputanndepan] = useState("");
  const [Inputannbelakang, setInputannbelakang] = useState("");
  const [Inputanemail, setInputanemail] = useState("");
  const [InputanPass, setInputanPass] = useState("");
  const navigate = useNavigate();

  const Berubahndepan = (berubahndepan) => {
    setInputanndepan(berubahndepan.target.value);
  };
  const Berubahnbelakang = (berubahnbelakang) => {
    setInputannbelakang(berubahnbelakang.target.value);
  };
  const Berubahemail = (berubahemail) => {
    setInputanemail(berubahemail.target.value);
  };
  const berubahPass = (berubahPassword) => {
    setInputanPass(berubahPassword.target.value);
  };

  const form1 = (hasil) => {
    hasil.preventDefault();
    let MengubahIsi = [];

    if (Inputanndepan === "") {
      MengubahIsi.push("nama depan ");
    }
    if (Inputannbelakang === "") {
      MengubahIsi.push("nama belakang ");
    }
    if (Inputanemail === "") {
      MengubahIsi.push("email ");
    }
    if (InputanPass === "") {
      MengubahIsi.push("password");
    }
    console.log(MengubahIsi.length);
    if (MengubahIsi.length === 0) {
      alert(`Selamat datang ${Inputanndepan}`);
      navigate("/login");
      localStorage.setItem("email", Inputanemail);
      localStorage.setItem("password", InputanPass);
    } else {
      alert(MengubahIsi + ` tidak boleh kosng!`);
    }

    console.log(Inputanndepan);
    console.log(Inputannbelakang);
    console.log(Inputanemail);
    console.log(InputanPass);
  };
  return (
    <div>
      <form onSubmit={form1}>
        <h1> Registrasi</h1>
        <h2> Belajar Itu menyenangkan</h2>
        <h2> kuy berlangganan</h2>
        <Label judul="Nama Depan" type="text" value={Inputanndepan} name="namadepan" onChange={Berubahndepan} />
        <Label judul="Nama Belakang" type="text" value={Inputannbelakang} name="namabelakang" onChange={Berubahnbelakang} />
        <Label judul="Email" type="text" value={Inputanemail} name="email" onChange={Berubahemail} />
        <Label judul="Password" type="password" value={InputanPass} name="password" onChange={berubahPass} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Registrasi;
