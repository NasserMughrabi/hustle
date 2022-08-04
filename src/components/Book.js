import React from 'react'

const Book = ({setShowComponent}) => {
  return (
    <section className="book">
        <h1>Contact For Appointment</h1>
        <article className="form">
            <div id="secs" className="name">
                <label htmlFor="Name">Name *</label>
                <div>
                    <input className='input' type="text" />
                    <label htmlFor="">First Name</label>
                </div>
                <div>
                    <input className='input' type="text" />
                    <label htmlFor="">Last Name</label>
                </div>
            </div>    
            <div id="secs" className="email">
                <label htmlFor="">Email *</label>
                <div>
                    <input className='input' type="text" />
                </div>
            </div>    
            <div id="secs" className="phone">
                <label htmlFor="">Phone *</label>
                <div>
                    <input className='input' type="text" />
                </div>
            </div>    
            <div id="secs" className="Address">
                <label htmlFor="">Address *</label>
                <div>
                    <input className='input' type="text" placeholder='Street, Zipcode, City, CA' />
                </div>
            </div>
            <div id="secs" className="car">
                <label htmlFor="">Year, Make, Model *</label>
                <div>
                    <input className='input' type="text" placeholder='2021, Audi, V8' />
                </div>
            </div>
            <div id="secs" className="service-choice">
                <label htmlFor="">Service *</label>
                <div>
                    <select name="" id="">
                        <option value="">Choose Service</option>
                        <option value="S1">S1</option>
                        <option value="S1">S1</option>
                        <option value="S1">S1</option>
                    </select>
                </div>
            </div>
            <button className='form-btn'>Submit</button>
        </article>
    </section>
  )
}

export default Book