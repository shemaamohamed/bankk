import React from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import "../../style/header.css"


function Header(props) {
    return (
    <nav className='nav-header'> 
    
    <div>
    <FaMoneyBillWave   style={{color: '#309164', fontSize: '40px'}}></FaMoneyBillWave>
    </div>
       
      
      
    <nav className='nav-header1'>
      
        <button href='#'>Home</button>
        <button href='#'>View customer</button>

    </nav>
    </nav>
    );
}

export default Header;