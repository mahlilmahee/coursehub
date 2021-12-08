import React from 'react';
import { useHistory } from 'react-router-dom';

const Course = (props) => {
    const {course,img,price,Time,tutor,key}=props.course;
   
    const style={
        margin:'50px auto',
        fontWeight:'900'
    }
    const button ={
        color:'white',
        backgroundColor:'black',
        width:'150px',
        heigth:'40px',
        borderRadius:'20px',
        margin:'5px',
        padding:'5px'
    }
    
    const history =useHistory();
    const handleCourse=()=>{
         history.push('/courses')
    }
    return (
        <div>
            
            <div style={style} className=" w-3/4 bg-blue-200 flex hover:bg-green-500 rounded-lg p-6 justify-evenly mt-10  items-center border-2 border-red-500 ">
           <div>
            <img src={img}/>
           </div>
           <div>
           <h1> Course:{course}</h1>
            <h3> Price:$ {price}</h3>
            <h3> Duration:{Time}</h3>
            <h1> Instructor:{tutor}</h1>
            <button style={button} onClick={handleCourse}>ALL Courses  </button>
            <button className="hover:bg-red-700" style={button} onClick={()=>props.handleToCart(key)} > Add to cart </button>
           </div>
        </div>
        </div>
    );
};

export default Course;