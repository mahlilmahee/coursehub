import React from 'react';
import CallingProduct from './ShopState';
import Checkout from './../Checkout/Checkout';
import { useState ,useEffect} from 'react';
import ReviewPur from './../ReviewPurchase.js/ReviewPur';
const Reveiw = () => {
    const courses=CallingProduct();
    // console.log(courses);
    const [cart,setCart]=useState([]);
    const handleToCart=(keyword)=>{
        let newArray=[...cart];
       // console.log(course);
          const courseList =courses.find(dt=>dt.key===keyword);
         // console.log(courseList.key);
         if(cart.indexOf(courseList)==-1){
            newArray=[courseList,...cart];
         }
          else {
             newArray=[...cart];
          }
        setCart(newArray);
      }
    return (
        <div>
            <h2> This is your review page bro </h2>
            {/* <Checkout course={cart}> </Checkout> */}
            <ReviewPur course={cart}></ReviewPur>
        </div>
    );
};

export default Reveiw;