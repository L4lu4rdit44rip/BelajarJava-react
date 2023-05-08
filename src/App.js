import React from "react";
// import logo from "./logo.svg";
// import gambar from "./414.png";
import "./App.css";
// import FormBaru from "./page/login/FormBaru";
// import Kalkulator from "./page/login/Kalkulator";
import ButtonKalkulator from "./page/login/ButtonKalkulator";
// import Textkomponen from "./Textkomponen";
// import HalamanLogin from "./page/login/Login";
import { Route, Routes } from "react-router-dom";
// import BelajarBAru from "./page/login/BelajarBAru";
import Registrasi from "./page/login/Registrasi";
import Login1 from "./page/login/Login1";
// import { Login } from "@mui/icons-material";

function App() {
  // const vb1 =
  //   "Kebanyakan manusia memandang kematian sebagai takdir yang tidak dapat dimungkiri, tidak dapat diatasi dan tidak dapat dihindari. Tetapi para ilmuwan, dan orang orang yang menguasai teknologi mempertanyakannya. Bagaimana jika kematian itu hanyalah sebuah peristiwa yang sesungguhnya dapat kita atasi? Mengapa kita tidak menggunakan segala sumberdaya untuk mengatasinya?";
  // // const ap1 = [];
  // // const ap1 = Array.from({ length: 5 }, (_, ind) => ind + 1);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Proyek baru</h1>
    //   </header>
    //   <div className="row">
    //     {[...Array(5)].map((apa, ind) => (
    //       <div className="column">
    //         <h2>Singularity {ind + 1}</h2>
    //         <p>{vb1}</p>
    //       </div>
    //     ))}
    //     <Textkomponen text="meang" />
    //     <HalamanLogin></HalamanLogin>
    //     {/* <div className="column">
    //       <h2>Singularity 1</h2>
    //       <p>{vb1}</p>
    //     </div>
    //     <div className="column">
    //       <h2>Singularity 2</h2>
    //       <p>{vb1}</p>
    //     </div> */}
    //   </div>
    //   <section className="row">
    //     <article className="column">
    //       <img src={gambar} className="gambar-foto" alt="gambar" />
    //       <p>
    //         saya merupakan seorang manusia yang sedang mencari jadi diri, saya selalu melakukan apa yang saya mau agar tidak terkendala dengan apa yang saya sedang lakukan. ini hanya sekedar basabasi agar orang tidak telalu percaya dengan
    //         apa yang sedang saya kerjakan. begitulah cerita hidup saya.
    //       </p>
    //     </article>
    //     <article className="column">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //         Learn React
    //       </a>
    //     </article>
    //   </section>
    //   <footer className="App-footer">
    //     <p>Footer - Copyright arip 2023</p>
    //   </footer>
    // </div>
    // <HalamanLogin></HalamanLogin>
    // <FormBaru></FormBaru>
    // <Kalkulator />
    // <ButtonKalkulator />
    <Routes>
      <Route path="/" element={<Registrasi />} />
      <Route path="/Login" element={<Login1 />} />
      <Route path="/halamanutama" element={<ButtonKalkulator />} />
    </Routes>
  );
}

export default App;
