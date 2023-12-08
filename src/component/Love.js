import React, { useState } from "react";
// import Card2 from "./child_component/Card2";
import Card from "./child_component/Card";
import Card2 from "./child_component/Card2";
import "../Love.css"

export default function Love(props) {
  const [pageno,setPage] = useState(1);
  const [title,settitle] = useState('First Month');
  const changePage = (page) => {
    setPage(page);
    console.log(page);
    if(page===1){
      document.getElementById('aadwad').style.backgroundImage = "url('https://i.pinimg.com/originals/2a/34/c9/2a34c95330d483685437ae5698b12fd9.gif')";
    }else if(page===2){
      document.getElementById('aadwad').style.backgroundImage = "url('https://i.pinimg.com/originals/69/66/48/69664884a33ecc5049a40b4b02bd182f.gif')"
    }else if(page===3){
      document.getElementById('aadwad').style.backgroundImage = "url('https://i.pinimg.com/originals/fa/49/4e/fa494e85b6099eda29f75fa0ae547e7a.gif')"
    }else if(page===4){
      document.getElementById('aadwad').style.backgroundImage = "url('https://media.tenor.com/PBZ8Bbo_87QAAAAC/milk-and-mocha-kiss.gif')"
    }
  }
  
  return (
    <div style={{backgroundImage: 'url("https://i.pinimg.com/originals/2a/34/c9/2a34c95330d483685437ae5698b12fd9.gif")',backgroundRepeat: "no-repeat",backgroundPosition: "center"}} id="aadwad">
        {pageno%2===0?<Card page={pageno} change={changePage} title={title} chngttl={settitle} click={props.setClick2}></Card>:<Card2 page={pageno} change={changePage} title={title} chngttl={settitle}></Card2>}
    </div>
  );
}
