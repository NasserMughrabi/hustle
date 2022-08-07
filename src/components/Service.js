import React from 'react'

const Service = ({setShowComponent}) => {
  const handleClick = () => {
    setShowComponent('Pricing');
  }

  return (
    <>
    <section className="service">
        <article id="detailing-service" className="service-item">
            <h1>DETAILING</h1>
            <button className='service-btn' onClick={handleClick}>DETAILS</button>
        </article>
        <article id="polish-service" className="service-item">
          <h1>POLISH / PAINT CORRECTION</h1>
          <button className='service-btn' onClick={handleClick}>DETAILS</button>
        </article>
        <article id="ceramic-service" className="service-item">
          <h1>CERAMIC COATING</h1>
          <button className='service-btn' onClick={handleClick}>DETAILS</button>
        </article>
    </section>
    </>
    
  )
}

export default Service