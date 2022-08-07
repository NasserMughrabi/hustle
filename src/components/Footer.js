import React from 'react'
import {FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
        <article className="icons">
          <a className='social' href="https://www.instagram.com/hustleautodetail/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className='social' href="https://www.tiktok.com/@hustleautodetail" target="_blank" rel="noopener noreferrer">
            <FaTiktok /></a>
          <a className='social' href="https://www.instagram.com/hustleautodetail/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </article>
        <article className="copyright">
          Copyright <i className="fa fa-copyright"></i> 2022 
          <br />
          All Rights Reserved.
        </article>
    </section>
  )
}

export default Footer