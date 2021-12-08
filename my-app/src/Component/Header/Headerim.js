import React from 'react';
import img from '../../images/headeragain.jpg';
import './Headerim.css'
import { NavLink } from 'react-router-dom';
const Headerim = () => {
    return (
        <div>
            <img src={img} width="100%" alt="" />
            <h1 className=" word"> Welcome to our WebHome. Please have a look.</h1>
            <h1 className="word2"> Please Check Here for all <button className="btn bg-green-400 hover:bg-yellow-400"><NavLink className="ms-2" to="/courses" > About us </NavLink></button> </h1>
        </div>
    );
};

export default Headerim;