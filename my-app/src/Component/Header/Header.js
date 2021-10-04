import React from 'react';
import img from '../../images/Teach_Yourself_logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const LinkColor={ fontWeight: "bold", color: "red"};
    return (
        <div className="flex justify-between p-8 bg-gray-400 items-center">
          <div> 
            <img   className="w-20 " src={img}/>
          </div>
          <div> 
            <h1 className="font-extrabold"> Keep your pace with the world .</h1>
          </div>
          <div className="text-white text-2xl ">
            

<NavLink to="/home"activeStyle={LinkColor}>  Home</NavLink>
<NavLink to="/courses"activeStyle={LinkColor}>  Courses</NavLink>
<NavLink to="/checkout"activeStyle={LinkColor}> Checkout </NavLink>
<NavLink to="/about"activeStyle={LinkColor}> About us </NavLink>

          </div>
        </div>
    );
};

export default Header;