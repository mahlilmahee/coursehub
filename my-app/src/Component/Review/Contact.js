import React from 'react';
import img from '../../images/unnamed.jpg'
const Contact = () => {
    const handlingEmail=()=>{
      const Submit =document.getElementById("ami");
              Submit.value='We will soon contact with you  ';
    }
   
    return (
        <div>
            <h4 className="text-purple-600 "> Hello I am checking whether tailwind css is working here or not please cooperate with us , so that we can help you too.</h4>
           <div className='grid grid-cols-2 gap-4 items-center'> 
            <img src={img} /> 
            <div> 

                <h3 className="w-3/4"> We are always here only for your help , if your have any query just mail us or inform us about your problem .We will contact with you as soon as possible from us . Thank you very much for being with us .</h3>
            </div>

            </div>
            <div className="border-2 border-green-300 m-10 rounded-lg">
                <h3 className="text-4xl mb-20 mt-10"> Contact us here  </h3> 
             <span> Here : </span>  
              <input id="ami" type="text" className="w-1/2 border-2 border-red-500 rounded-lg mb-20" placeholder="please insert your query here " />
                 <button onClick={handlingEmail} className='bg-green-500 p-2 rounded-lg' >Send</button>
                <br />
             <span>
                  For any of your query please send us an email on this email : webbaba@gmail.com
                  </span>
        </div>
        </div>
    );
};

export default Contact;