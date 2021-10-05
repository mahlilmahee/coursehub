import React from 'react';

const ReviewPur = (props) => {
    const {course}=props;
    console.log(props)
    let total =0;
     for(const totalll of  course ){
         total =total+totalll.price;}
    return (
        <div>
            <h3> total:{total} </h3>
        </div>
    );
};

export default ReviewPur;