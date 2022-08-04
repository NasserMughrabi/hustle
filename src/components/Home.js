import React from 'react'
import { useState } from 'react';



const Home = () => {
    const [display, setDisplay] = useState(false);
    const handleClick = () => {
        setDisplay(!display);
    }

  return (
    <section className='home'>
        <article className="navbar">
            <i className="fas fa-bars" onClick={handleClick}></i>
            
        </article>
        <article className="center">
            <div className="title">Hustle Mobile</div>
            <button className='btn'>Book Detail</button>
        </article>
    </section>
  )
}

export default Home