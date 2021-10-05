import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

const Details = () => {
    // const {id}=useParams();
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('./courses.json', {
    //         headers : { 
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
    //          }
      
    //       })

    //     .then(res=>res.json())
    //     .then(data=>singleCourse(data))
    // },[]);
    // const singleCourse =(id)=>{
    //         const newdata = data.find(data=>data.id===id);
    //         setData(newdata);
    // }
    return (
        <div>
            
            <h3 className="text-4xl mt-20">This is the place where we put all the details of a course 
                 </h3>
                 <h2 className="text-3xl mb-20 mt-10"> It will be updated soon , till then please wait for us </h2>
        </div>
    );
};

export default Details;
<h3> This is our course outline </h3>