import React from "react";
import "../Firstpage.css";

export default function Firstpage(props) {
    const handleclick = () => {
        props.setClick(true);
    }
  return (
    <main className="center" style={{fontSize: "3rem",backgroundImage: "linear-gradient(to top, white , purple)",color: "white"}}>
      <section className="iso">
        <header>
          <h1>Hi Siddhu!!!!!</h1>
        </header>
        <p style={{marginBottom: "3rem"}}>
          Hey my dear love, I hope you like what i made for you..  
        </p>
        <div className="button-container">
          <button className="btn1" onClick={handleclick}>
            <div className="content">
              i wanna see!!
              <div className="side"></div>
              <div className="front"></div>
            </div>
          </button>
          <button className="btn1">
            <div className="content">(Naah)</div>
            <div className="side"></div>
            <div className="front"></div>
          </button>
        </div>
      </section>
    </main>
  );
}
