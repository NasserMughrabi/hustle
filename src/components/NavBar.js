import React from 'react'
import { useState } from 'react';

const NavBar = ({setShowComponent, color}) => {

    const [display, setDisplay] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('Home');
    
    const handleMenuClick = () => {
        setDisplay(!display);
    }
    const handleHomeClick = () => {
        setShowComponent('Home');
        setDisplay(false);
        setSelectedComponent('Home');
    }
    const handleServiceClick = () => {
        setShowComponent('Service');
        setDisplay(false);
        setSelectedComponent('Service');
    }
    const handleContactClick = () => {
        setShowComponent('Contact');
        setDisplay(false);
        setSelectedComponent('Contact');
    }
    const handleBookClick = () => {
        setShowComponent('Book');
        setDisplay(false);
        setSelectedComponent('Book');
    }

  return (
    <>
    <article className="navbar">
            <i className="fas fa-bars" style={{color: color}} onClick={handleMenuClick}></i>
            <i className='nav-items' onClick={handleHomeClick}>Home</i>
            <i className='nav-items' onClick={handleServiceClick}>Services</i>
            <i className='nav-items' onClick={handleContactClick}>Contact</i>
            <i className='nav-items' onClick={handleBookClick}>Book</i>
    </article>
    <ul className='drop-ul' style={{height: display ? '225px' : '0px'}}>
        <li style={{color: selectedComponent==='Home' ? '#cb5559' : 'white'}} onClick={handleHomeClick}>
            Home
        </li>
        <li style={{color: selectedComponent==='Service' ? '#cb5559' : 'white'}} onClick={handleServiceClick}>
            Services
        </li>
        <li style={{color: selectedComponent==='Contact' ? '#cb5559' : 'white'}} onClick={handleContactClick}>
            Contact
        </li>
        <li style={{color: selectedComponent==='Book' ? '#cb5559' : 'white'}} onClick={handleBookClick}>
            Book
        </li>
    </ul>
    </>
  )
}

export default NavBar