import React, { useState } from "react";
import Label from "../../component/Label";

function BelajarBAru() {
  const [Inputanndepan, setInputanndepan] = useState("");
  const [Inputannbelakang, setInputannbelakang] = useState("");
  const [Inputanemail, setInputanemail] = useState("");
  const [InputanPass, setInputanPass] = useState("");

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
    console.log(Inputanndepan);
    console.log(Inputannbelakang);
    console.log(Inputanemail);
    console.log(InputanPass);
    alert(`Selamat datang ${Inputanndepan}`);
  };
  return (
    <div>
      <form onSubmit={form1}>
        <h1> Belajar Itu Menyenangkan</h1>
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

export default BelajarBAru;
