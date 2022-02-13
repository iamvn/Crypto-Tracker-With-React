import React from 'react';
import { Link } from 'react-router-dom';
import '../footer/footer.css';
const Footer = () =>{
    return(
        <div className='cu-footer'>
            <p>Know More About <span><Link to="/about">@Vinay Bharti</Link></span></p>
        </div>
    )
}

export default Footer;