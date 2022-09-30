import React, { useState } from 'react';
import {Link} from "react-router-dom";


function Work() {
  const [webClick, setWebClick] = useState(false);
  const [graphClick, setGraphClick] = useState(false);
  const [animClick, setAnimClick] = useState(false);
  
  return (
    <div className='workContainer'>
      <h1>{webClick ? "Web design & dev" : ""}
      {graphClick ? "Graphisme" : ""}
      {animClick ? "Animation" : ""}</h1>
      <div className="catBtn">
        <button 
        onClick={() => {
          setWebClick((prev) => !(prev));
          setGraphClick(false);
          setAnimClick(false)
        }}
        className="btnCategory">Web design & Dev</button>
        <button 
        onClick={() => {
          setGraphClick((prev) => !(prev));
          setWebClick(false);
          setAnimClick(false);
        }}
        className="btnCategory">Graphisme</button>
        <button 
        onClick={() => {
          setAnimClick((prev) => !(prev));
          setWebClick(false);
          setGraphClick(false);
        }}
        className="btnCategory">Animation</button>
      </div>
      <div id={webClick ? "catOpen" : "catClose"} className="category">
        <div className="cardWork">
          <h3>Gites Brocéliande</h3>
          <Link to="">grand-gite-brocéliande.fr</Link>
          <img src="" alt="" />
        </div>
        <div className="cardWork">
          <h3>Portfolio</h3>
          <Link>valentinevangelista.fr</Link>
          <img src="" alt="" />
        </div>
      </div>
      <div id={graphClick ? "catOpen" : "catClose"} className="category">
        <div className="cardWork">
          <img src="" alt="" />
          <h3>Miel Pops</h3>
        </div>
        <div className="cardWork">
          <img src="" alt="" />
          <h3>Buzz Burger</h3>
        </div>
      </div>
      <div id={animClick ? "catOpen" : "catClose"} className="category">
        <div className="cardWork">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Work