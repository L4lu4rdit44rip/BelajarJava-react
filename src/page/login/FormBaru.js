import Label from "../../component/Label";
import React, { useState } from "react";

function FormBaru() {
  const [InputanUser, setInputanUser] = useState("");
  const [InputanPass, setInputanPass] = useState("");
  const [Inputangka, setInputAngka] = useState(2);
  //   let angaka = 0;
  function AngkaBerubah() {
    console.log("tambah");
    // angaka += 1;
    setInputAngka(Inputangka * 2);
    console.log(Inputangka * 2);
    // console.log(angaka);
  }
  //   console.log("render");
  let bebas = "";
  //   const BerubahBebas = (berubah2) => {
  //     // console.log(berubah2.target.value);
  //     bebas = 2;
  //   };
  const BerubahUser = (berubahUser) => {
    // console.log(berubah2.target.value);
    setInputanUser(berubahUser.target.value);
  };
  const berubahPass = (berubahPassword) => {
    // console.log(berubahPassword.target.value);
    setInputanPass(berubahPassword.target.value);
  };
  const form1 = (hasil) => {
    console.log(InputanUser);
    console.log(bebas);
    console.log(InputanPass);
    alert(`Selamat datang ${InputanUser}`);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={form1}>
        {/* <label>Bebas</label>
        <label>Username</label>

        <label>Password</label> */}
        <Label judul="Username" type="text" value={InputanUser} name="username" onChange={BerubahUser} />
        <Label judul="Password" type="password" value={InputanPass} name="password" onChange={berubahPass} />
        <button type="submit">Login</button>
      </form>
      <p>{Inputangka}</p>
      {/* <p>{angaka}</p> */}
      <button onClick={AngkaBerubah}>Ubah</button>
    </div>
  );
}
export default FormBaru;
