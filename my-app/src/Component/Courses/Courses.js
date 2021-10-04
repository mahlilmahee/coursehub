import React, { useEffect, useState } from 'react';

import Allcourse from './../Allcourse/Allcourse';
const Courses = () => {
    const [ courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <h2 className="italic text-3xl"> Our top rated and latest courses for the learners . </h2>
            {
                courses.map(course=><Allcourse course={course} key={course.key}></Allcourse>)
            }
        </div>
    );
};

export default Courses;