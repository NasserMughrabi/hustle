import React from 'react'
import {FaFacebook, FaInstagram, FaTwitterSquare, FaTiktok} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
        <article className="icons">
          <a className='social' href="https://twitter.com/MughrabiNasser/" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
          <a className='social' href="https://www.instagram.com/nasser_mughrabi/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className='social' href="https://twitter.com/MughrabiNasser/" target="_blank" rel="noopener noreferrer">
            <FaTiktok /></a>
          <a className='social' href="https://www.instagram.com/nasser_mughrabi/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </article>
        <article className="copyright">
          Copyright <i class="fa fa-copyright"></i> 2022 
          <br />
          All Rights Reserved.
        </article>
    </section>
  )
}

export default Footer