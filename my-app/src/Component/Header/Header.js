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
          <div className="text-white text-2xl ">
            

<NavLink to="/home"activeStyle={LinkColor}>  Home</NavLink>
<NavLink to="/about"activeStyle={LinkColor}> About us </NavLink>
<NavLink to="/courses"activeStyle={LinkColor}>  Courses</NavLink>
<NavLink to="/tutors"activeStyle={LinkColor}>  Tutors</NavLink>
{/* <NavLink to="/faq"activeStyle={LinkColor}>  None</NavLink>
<NavLink to="/faq"activeStyle={LinkColor}>  None</NavLink> */}

            {/* <a  href="">Home </a>
            <a className='x-5' href=""> About us</a>
            <a href=""> Courses</a>
            <a href=""> Tutors</a>
            <a href=""> None</a> */}
          </div>
        </div>
    );
};

export default Header;