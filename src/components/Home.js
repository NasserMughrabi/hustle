import React from 'react'
// import { FaBars } from 'react-icons/fa';

const Home = () => {
  return (
    <section className='home'>
        <article className="navbar">
            {/* <FaBars /> */}
            <i className="fas fa-bars"></i>
            {/* <nav>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Book Online</button>
            </nav> */}
        </article>
        <article className="center">
            <div className="title">Hustle Mobile</div>
            <button className='btn'>Book Detail</button>
        </article>
    </section>
  )
}

export default Home