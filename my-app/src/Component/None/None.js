import React from 'react';
import img from '../../images/images.jpg';
const None = () => {
    const design ={
        margin:"10 auto ",
        padding:'10px'
    }
    return (
        <div style={design} >
            <h2> Ooops!  Page not found :)</h2>
            <img className='w-1/2 mx-auto'  src={img}/> 
            
        </div>
    );
};

export default None;