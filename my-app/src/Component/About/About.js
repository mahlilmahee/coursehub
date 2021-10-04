import React from 'react';
import img from '../../images/images (1).jpg';
const About = () => {
    return (
        <div>
          <img className='w-1/2 mx-auto p-4' src={img}/>    
          <p> <span className="text-red-400 font-extrabold">About us</span> : I think before buying our course it is important to know that who we are? </p> 
          <p> Lets talk something about us , we are four friends trying to run the company for the student who are always been betrayed by the online scammer in the name of the online courses .I personnaly also have lost my money and valuable time due to this kind of online scammers . That's why we friends have taken this initiative to save the others valuable time for the welfare of the world . </p> 
          <ul >
              <li className="mt-12">Mahlil Mahee - CEO of the Companey and Owner </li>
              <li> Lynda Myrinda - Course operator </li>
              <li> Max hary - Our Manager </li>
              <li> Harry Loan -Investor  </li>
          </ul>
        </div>
    );
};

export default About;