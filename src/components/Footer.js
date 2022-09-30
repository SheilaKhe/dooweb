import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <hr />
        <div className='social'>
            <h5>Socials</h5>
            <ul>
                <li>Behance</li>
                <li>Instagram</li>
                <li>Dribble</li>
            </ul>

        </div>
        <div className='contactMail'>
            <h5>Say hello !</h5>
            <a href="mailto:contact@dooweb.agency">contact@dooweb.agency</a>
        </div>
        <hr />
        <p>Dooweb &copy; 2022</p>

    </div>
  )
}

export default Footer