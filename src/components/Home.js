import React from 'react'
import { useState } from 'react';
import Service from './Service';



const Home = ({setShowComponent}) => {
    const [display, setDisplay] = useState(false);
    const handleClick = () => {
        setDisplay(!display);
    }

    const handleBookClick = () => {
        setShowComponent('Book');
    }

  return (
    <>
    <section className='home'>
        <article className="navbar">
            <i className="fas fa-bars" onClick={handleClick}></i>
        </article>
        <article className="center">
            <div className="title">Hustle Mobile</div>
            <button className='btn' onClick={handleBookClick}>Book Detail</button>
        </article>
    </section>
    <Service setShowComponent={setShowComponent}/>
    </>
    
  )
}

export default Home