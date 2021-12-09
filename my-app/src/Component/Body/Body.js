import React from 'react';
import { useState ,useEffect} from 'react';
import Checkout from '../Checkout/Checkout';
import Course from '../Course/Course';
import { addtoDataBase } from '../../Database/Database';
import img from "../../images/divimgae.jpg";
import Navbar from './../Header/Navbar';
import Headerim from './../Header/Headerim';
import { Component } from 'react'
import Typical from 'react-typical'
const Body = () => {
  const [cart,setCart]=useState([]);
    
 const [course,setCourse]=useState([]);
 useEffect(()=>{
  fetch('./courses.json')
   .then(res=>res.json())
   .then(data=>setCourse(data.slice(0,4)))
 },[]);
//  handling the order of the courses 
 const handleToCart=(keyword)=>{
   let newArray=[...cart];
  // console.log(course);
     const courseList =course.find(dt=>dt.key===keyword);
    // console.log(courseList.key);
    if(cart.indexOf(courseList)==-1){
       newArray=[courseList,...cart];
    }
     else {
        newArray=[...cart];
     }
   setCart(newArray);
   addtoDataBase(keyword)
 }
 const button ={
  color:'white',
  backgroundColor:'black',
  width:'150px',
  heigth:'40px',
  borderRadius:'20px',
  marginLeft:'5px',
  margin:'5px',
  padding:'2px '
};
 const handlingcourse =()=>{
   const newcourse =[];
   setCart(newcourse);
   setCourse(newcourse);
   const divtext =document.getElementById('maincourse');
    const div =document.createElement('div');
    div.innerHTML=`
    <img style={margin:'2px auto'}  src=${img}/>
    `;
    divtext.innerText=' Congrats you have purchased your course  ';
   divtext.appendChild(div)
 }

    return (
       <div id="maincourse"> 
      <Headerim></Headerim>
      <h1 className="italic text-3xl"> 
      <Typical
        steps={['We Provide', 1000, 'We Provide the best courses ', 1000 ]}
        loop={Infinity}
        wrapper="p"
      />
      </h1>
      <h1 className="italic text-3xl"> 
      <Typical
        steps={['plenty of teachers', 2000, ' Thank you ', 2000 ]}
        loop={Infinity}
        wrapper="p"
      />
      </h1>
      
         <h1 className="italic text-3xl">Our most demandable courses in 2021 . </h1>
          <div className="flex justify-around">
        
          <div>
          {
            course.map(course=><Course key={course.key} handleToCart={handleToCart} course={course}>  </Course>)
          } 

          </div>
         <div>
         
          <Checkout handlingcourse={handlingcourse} course={cart}> <button style={button} onClick={handlingcourse} className=""> Procced to checkout </button> </Checkout>
         </div>
        </div>
       </div>
    );
};

export default Body;