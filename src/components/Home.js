import React from 'react'
import Service from './Service';
import NavBar from './NavBar';

const Home = ({setShowComponent}) => {

    
    const handleBookClick = () => {
        setShowComponent('Book');
    }

  return (
    <>
    <section className='home'>
        <NavBar color={'white'} setShowComponent={setShowComponent}/>
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