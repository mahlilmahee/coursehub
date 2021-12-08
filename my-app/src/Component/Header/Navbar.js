import React from 'react';
import img from '../../images/Teach_Yourself_logo.png'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={img} alt="" width="30" height="24"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
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