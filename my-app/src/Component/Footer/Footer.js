import React from 'react';
import img from '../../images/Teach_Yourself_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faFacebook,faYoutube,faInstagram,faReddit } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'


const Footer = () => {
    return (
        <div className='bg-gray-900 text-white '>
            {/* addign two parts of a footer here  */}
            <div className='bg-gray-900 text-white flex justify-between items-center '>
            <div>
                   <img className='w-32' src={img}/>
                
            </div>
            <div>
                <span>Subscribe : <input type='email' placeholder="subscribe us here "/></span>
            </div>
            <div>
             <p> mail-us: <small>findyourtalent@gmail.com</small></p>
             <h2> Our website : FindHiddenTalent.com</h2>
             <h4> Our address: Ney york, 32 no street ,house no 4 </h4>
              
            </div>
            </div>
             <div> 
                   <h2> Follow us on </h2>
               <FontAwesomeIcon icon={faReddit} />
            
               <FontAwesomeIcon icon={faTwitter} />
               <FontAwesomeIcon icon={faFacebook} />
               <FontAwesomeIcon icon={faInstagram} />
               <FontAwesomeIcon icon={faYoutube} />


                  <p className='text-white' >We are commited for your bright future </p><p className='text-white'>
                       All the rights reserved here copyright Rule 2021
                   </p>
             </div>
        </div>
    );
};

export default Footer;<h2> This is footer my friends</h2>