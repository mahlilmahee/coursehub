import React from 'react';

const Checkout = (props) => {
   const {course}=props;
   let total =0;
    for(const totalll of  course ){
        total =total+totalll.price;}
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
    return (
        <div className='border-3 border-green-300'>
            <h2> Your orders are here </h2>
            <h3>Course selected : {course.length}</h3>
           
            <div> <h2>
                Total :{ total} </h2></div>
                <button style={button} className=""> Procced to checkout </button>
        </div>
    );
};

export default Checkout;