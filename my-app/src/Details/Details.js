import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

const Details = () => {
    const {id}=useParams();
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('./courses.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
          
        .then(res=>res.json())
        .then(data=>singleCourse(data))
    },[]);
    const singleCourse =(id)=>{
            const newdata = data.find(data=>data.id===id);
            setData(newdata);
    }
    return (
        <div>
            
            <h3> This is our course outline
                {data.name} </h3>
        </div>
    );
};

export default Details;
<h3> This is our course outline </h3>