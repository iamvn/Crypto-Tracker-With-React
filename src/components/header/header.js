import React from 'react';
import { Link } from 'react-router-dom';
import '../header/header.css';

const Header = ({totalFetchedData,coinsInfo}) =>{
    return(
        <div className='cu-navbar'>
            <Link className='logo' to="">Your Crypto Tracker</Link>
            <div className='count-div'><p>Data limit Set On Table : {coinsInfo.length}</p>
            <p>Total Data Fetched By API: {totalFetchedData}</p>
            </div>
        </div>
    );
}

export default Header;