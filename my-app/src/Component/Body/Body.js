import React from 'react';
import { useState ,useEffect} from 'react';
import Course from '../Course/Course';
const Body = () => {
 const [course,setCourse]=useState([]);
 useEffect(()=>{
   fetch('./simple.json')
   .then(res=>res.json())
   .then(data=>setCourse(data))
 },[])
    return (
        <div>
         <h1 className="italic text-3xl">Our most demandable courses in 2021 . </h1>
          {
            course.map(course=><Course key={course.key} course={course}>  </Course>)
          } 
        </div>
    );
};

export default Body;