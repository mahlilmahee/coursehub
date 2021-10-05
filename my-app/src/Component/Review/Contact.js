import React from 'react';

const Contact = () => {
    const handlingEmail=()=>{
      const Submit =document.getElementById("ami");
              Submit.value='We will soon contact with you  ';
    }
    return (
        <div className="border-2 border-green-300 m-10 rounded-lg">
                <h3 className="text-4xl mb-20 mt-10"> Contact us here  </h3> 
             <span> Question:</span>  
              <input id="ami" type="text" className="w-1/2 border-2 border-red-500 rounded-lg mb-20" placeholder="please insert your query here " />
               <button onClick={handlingEmail} className='bg-green-500 p-2 rounded-lg' >Send</button>
                <br />
             <span>
                  For any of your query please send us an email on this email : webbaba@gmail.com
                  </span>
        </div>
    );
};

export default Contact;