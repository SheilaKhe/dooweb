import React, { useState } from 'react';
import "../App.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {Link} from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import Rond from '../img/rond-white.png';
import '@splidejs/splide/css';


function Home(params) {
    const [hoveringText, setHoveringText] = useState(false);

    
    return (
        <div className="home">
            <div className="title">

                <h1><span className="create">Create</span> <br />
                <span className='yours'
                onMouseEnter={() => {
                    setHoveringText((prev) => !(prev))
                }}
                onMouseLeave={() => {
                    setHoveringText((prev) => !(prev))
                }}>{hoveringText ? "Your" : "The"}</span> <br />
                <span className="future">future</span> </h1>

                <Link to="">Qui sommes nous <ArrowOutwardIcon/></Link>
            </div>
            <div className="option">
                <Link to="#" className='lang'>Fr</Link>
                <button type='button'>Light</button>
            </div>
            <div className="words">
                <div className='scrollingWord'>
                    <span className='txt t1'><i>Technology -</i> Beauty <i>- Technology</i> - Beauty - </span>
                    <span className='txt t2'><i>Technology -</i> Beauty <i>- Technology</i> - Beauty - </span>
                </div>
                <div className='scrollingWord'>
                    <span className='txt2'><i>Technology - </i> Beauty <i>- Technology</i> - Beauty - </span>
                    <span className='txt2'><i>Technology - </i> Beauty <i>- Technology</i> - Beauty - </span>
                </div>
                <div className='scrollingWord'>
                    <span className='txt t1'><i>Technology</i> - Beauty - <i>Technology</i> - Beauty - </span>
                    <span className='txt t2'><i>Technology</i> - Beauty - <i>Technology</i> - Beauty - </span>
                </div>
            </div>
            {/* <div className="weDo">
                <h2>We do and we like doing...</h2>
                <div className="cards">
                    <section class="splide" aria-label="Splide Basic HTML Example">
                        <div class="splide__track">
                            <ul class="splide__list">
                                <li class="splide__slide">
                                    <div className="card">
                                        <h3 className="cardTitle">Web Design</h3>
                                        <div className="cardContainer">
                                            <div>
                                                <img src={Rond} alt="Rond" />
                                                <div className="cardText">
                                                    <p>Nous vous ferons des maquettes sur mesure, avec des design innovant</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="splide__slide">Slide 02</li>
                                <li class="splide__slide">Slide 03</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div> */}
            <hr />
            <div className="presentation">
                <p>On est des bg qui réaliseront avec soin vos projets.
                </p>
                <Link to="" className='who'>Qui sommes nous <ArrowOutwardIcon /></Link>
            </div>
            <hr />
            <div className="letsCreate">
                <h3>Let's create  </h3>
                <EastIcon/>
            </div>

        </div>
)}

export default Home