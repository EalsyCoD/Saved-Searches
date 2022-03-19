import React from 'react';
import cl from './Footer.module.scss'
const Footer = () => {
    return (
        <div className={cl.container}>
            <div className={cl.block1}>
           <h1>Reports</h1> 
           <ul>
               <li>Last decoded VINs</li>
               <li>Sample report</li>
               <li>VIN check by state</li>
               <li>VIN flood damage check</li>
           </ul>
           </div>
           <div className={cl.block2}>
           <h2>Cars for sale</h2> 
           <ul>
               <li>Used cars for sale</li>
               <li>Car Dealers</li>
               <li>Cheap cars for sale</li>
               <li>View all inventory</li>
           </ul>
           </div>
           <div className={cl.block3}>
           <h3>Company</h3> 
           <ul>
               <li>About us</li>
               <li>Contact us</li>
               <li>Blog</li>
               <li>FAQ</li>
               <li>Affilate</li>
           </ul>
           </div>
        </div>
    );
}

export default Footer;
