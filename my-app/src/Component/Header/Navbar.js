import React from 'react';
import img from '../../images/Teach_Yourself_logo.png'
import Headerim from './Headerim';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const LinkColor={ fontWeight: "bold", color: "white"};
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ami " >
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={img} alt="" width="30" height="26"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto linkgula ">
        
<NavLink className="ms-3" to="/home"activeStyle={LinkColor} >  Home</NavLink>
<NavLink className="ms-3" to="/courses"activeStyle={LinkColor} href="abulbhai">  Courses</NavLink>
<NavLink className="ms-3" to="/contact"activeStyle={LinkColor}> Contact  </NavLink>
<NavLink className="ms-2" to="/about"activeStyle={LinkColor}> About us </NavLink>
      </div>
    </div>
  </div>
</nav>
{/* <Headerim></Headerim> */}
        </div>
    );
};

export default Navbar;









// import React from 'react';
// import './Navbar.css'
// import img from '../../images/Teach_Yourself_logo.png'
// const Navbar = () => {
//     return (
//         <div>
//             <h1> This is gonna be our navbar please wait here everybody for me . Just some ...</h1>
//             <div className="navbar"> 
//             {/* flex boy is here  */}
//               <div className='flexboy'> 
//               <div className="firstend"> <img src={img} width="1%" alt="" /> </div>

// <div className="backend"> 
//   <a href="#"> Home </a>
//   <a href="#"> Delivery  </a>
//   <a href="#"> Order </a>
//   <a href="#">  Contact </a>
// </div>



//               </div>


//             </div>
//         </div>
//     );
// };

// export default Navbar;