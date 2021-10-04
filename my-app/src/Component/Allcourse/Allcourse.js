import React from 'react';

const Allcourse = (props) => {
    const {course,img,price,time,tutor}=props.course;
    const style={
        margin:'50px auto',
        fontWeight:'900'
    }
    const button ={
        color:'white',
        backgroundColor:'black',
        width:'150px',
        heigth:'40px',
        borderRadius:'20px'
    }
   
    return (
        <div>
              
              <div style={style} className=" w-3/4 bg-blue-200 flex hover:bg-green-500 rounded-lg p-6 justify-evenly mt-10  items-center border-2 border-red-500 ">
           <div>
            <img src={img}/>
           </div>
           <div>
           <h1> Course:{course}</h1>
            <h3> Price:{price}</h3>
            <h3> Duration:{time}</h3>
            <h1> Instructor:{tutor}</h1>
            <button style={button} >Checkout   </button>
           </div>
        </div>
        </div>
    );
};

export default Allcourse;