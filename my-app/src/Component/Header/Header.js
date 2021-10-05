import React from 'react';
import img from '../../images/Teach_Yourself_logo.png';
import imgs from '../../images/images (2).jpg'
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
  const LinkColor={ fontWeight: "bold", color: "yellow"};
 const  style={  backgroundImage: `url(${imgs})`}; 
    return (
       <div style={style}>
         <h3 className="text-2xl text-white"> Welcome to TeachYourself</h3>
          <div className="flex justify-between p-8  items-center " >
           <div> 
            <img   className="w-20 " src={img}/>
          </div>
          <div> 
            {/* <h1 className="font-extrabold text-2xl mb-20"> welcome to TeachYourself </h1> */}
          </div>
          <div className="text-white text-2xl ">
            

<NavLink to="/home"activeStyle={LinkColor}>  Home</NavLink>
<NavLink to="/courses"activeStyle={LinkColor}>  Courses</NavLink>
<NavLink to="/contact"activeStyle={LinkColor}> Contact  </NavLink>
<NavLink to="/about"activeStyle={LinkColor}> About us </NavLink>

          </div>
        </div>
       </div>
    );
};

export default Header;