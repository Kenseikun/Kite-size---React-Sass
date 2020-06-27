import React, { useState } from 'react';
import '../scss/main.scss'
import { Link } from 'react-router-dom';
import surfing from '../images/surfing.svg';
import { useLocalState } from './locHook';



export const Wages = () => {

    const [wage, setWages] = useLocalState('wage');

    return (

        <main>
            <div className="main-weight__container">
                <h2 className="main-weight">Choose your weight</h2>

                <div className="main-btn__container">
                    <div className="btn_wages btnFirst" onClick={() => setWages("55")}>55kg</div>
                    <div className="btn_wages btnSec" onClick={() => setWages("65")}>65kg</div>
                    <div className="btn_wages btnThird" onClick={() => setWages("75")}>75kg</div>
                    <div className="btn_wages btnFourth" onClick={() => setWages("85")}>85kg</div>
                </div>

                <p>&</p>
                <p>click the button to check your spot</p>

                <Link to="/main">
                    <button className="main-btn__check">Shaka!</button>
                </Link>

                <img className="surfing" src={surfing}></img>
            </div>
        </main>
    )
}

