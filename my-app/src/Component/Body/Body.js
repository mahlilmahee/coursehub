import React from 'react';
import { useState ,useEffect} from 'react';
import Checkout from '../Checkout/Checkout';
import Course from '../Course/Course';
import { useHistory } from 'react-router-dom';
import { addtoDataBase } from '../../Database/Database';

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
 const history =useHistory
    return (
       <div> 
         <h1 className="italic text-3xl">Our most demandable courses in 2021 . </h1>
          <div className="flex justify-around">
        
          <div>
          {
            course.map(course=><Course key={course.key} handleToCart={handleToCart} course={course}>  </Course>)
          } 

          </div>
         <div>
         
          <Checkout course={cart}> </Checkout>
         </div>
        </div>
       </div>
    );
};

export default Body;