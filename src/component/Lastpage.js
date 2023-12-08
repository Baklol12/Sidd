import React from "react";
import "../Firstpage.css";

export default function Firstpage(props) {
  const handls = () =>{
    document.getElementById("sada").style.backgroundImage = "url('https://i.pinimg.com/originals/ca/cd/fb/cacdfbfcbb04a05af340446db3d5cb4d.gif')";
    document.getElementById("sada").style.backgroundPosition = "center";
    document.getElementById("sada").style.backgroundRepeat = "no-repeat";
    document.getElementById("sada").style.backgroundSize = "60vw 80vh";
  }
  const handle = () =>{
    document.getElementById("sada").style.backgroundImage = "url('https://gifsec.com/wp-content/uploads/2022/09/sad-gif-1.gif')";
    document.getElementById("sada").style.backgroundPosition = "center";
    document.getElementById("sada").style.backgroundRepeat = "no-repeat";
    document.getElementById("sada").style.backgroundSize = "60vw 80vh";
  }
  return (
    <main className="center" id="sada" style={{fontSize: "3rem",backgroundImage: "linear-gradient(to top, white , purple)",color: "white"}}>
      <section className="iso">
        <header>
          <h1>Hey!!!!!</h1>
        </header>
        <p style={{marginBottom: "3rem"}}>
          How was it....  
        </p>
        <div className="button-container">
          <button className="btn1" onClick={handls}>
            <div className="content">
              Okayish!!
              <div className="side"></div>
              <div className="front"></div>
            </div>
          </button>
          <button className="btn1" onClick={handle}>
            <div className="content">Bekarr</div>
            <div className="side"></div>
            <div className="front"></div>
          </button>
        </div>
      </section>
    </main>
  );
}
