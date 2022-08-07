import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Book = ({setShowComponent}) => {
    const form = useRef();
    const handleSubmitClick = (e) => {
        let emptyField = false;
        e.preventDefault();
        document.querySelectorAll('.input').forEach(item => {
            if (item.value === '' && !emptyField) {
                emptyField = true;
                alert('One or more of the fields is empty!');
            }
        });
        if(!emptyField) {
            emailjs.sendForm('hustle_v92oy3a', 'template_oceyd2r', e.target, '01pNSYIZiCoEt2dVi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            setShowComponent("Confirmation")
        }
    }

  return (
    <>
    <section className="book">
        <h1>Contact For Appointment</h1>
        <form className="form"  ref={form} onSubmit={handleSubmitClick}>
            <div id="secs" className="name">
                <label htmlFor="Name">Name *</label>
                <div>
                    <input className='input' type="text" name='first'/>
                    <label htmlFor="">First Name</label>
                </div>
                <div>
                    <input className='input' type="text" name='last'/>
                    <label htmlFor="">Last Name</label>
                </div>
            </div>    
            <div id="secs" className="email">
                <label htmlFor="">Email *</label>
                <div>
                    <input className='input' type="text" name='email'/>
                </div>
            </div>    
            <div id="secs" className="phone">
                <label htmlFor="">Phone *</label>
                <div>
                    <input className='input' type="text" name='phone'/>
                </div>
            </div>    
            <div id="secs" className="Address">
                <label htmlFor="">Address *</label>
                <div>
                    <input className='input' type="text" name='address' placeholder='Street, Zipcode, City, CA' />
                </div>
            </div>
            <div id="secs" className="car">
                <label htmlFor="">Year, Make, Model *</label>
                <div>
                    <input className='input' type="text" name='car' placeholder='2021, Audi, V8' />
                </div>
            </div>
            <div id="secs" className="service-choice">
                <label htmlFor="">Service *</label>
                <div>
                    <select name="service" className='input'>
                        <option value="">Choose Service</option>
                        <option value="S1">Detailing</option>
                        <option value="S1">Polish/Pain Correction</option>
                        <option value="S1">Ceramic Coating</option>
                    </select>
                </div>
            </div>
            <button className='form-btn'>Submit</button>
        </form>
    </section>
    </>
  )
}

export default Book