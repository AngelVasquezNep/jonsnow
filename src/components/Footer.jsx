import React from 'react'
import './footer.css'
import githubImg from '../assets/contacto/github.png';
import twitterImg from '../assets/contacto/twitter.png';
import linkedinImg from '../assets/contacto/linkedin.png';
import mailImg from '../assets/contacto/mail.png';


const Footer = props => {
  return (
    <div className="Footer">
      <p className="Footer-agradecimiento">This product was built with the &nbsp; 
        <a href="https://api.got.show" target="_blank"> GOT API </a>
      </p>
      <div className="Footer-Contacto">
        <p> © Copyright 2018 Ángel Vásquez</p>
        <span>
          <a href="https://github.com/angelvasqueznep/jonsnow" target="_blank">
            <img src={githubImg} alt="github"/> 
          </a>
        </span>  
        <span>
          <a href="https://twitter.com/angelvasqueznep" target="_blank">
            <img src={twitterImg} alt="twitter"/>
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/ángel-vásquez-nepomuceno/" target="_blank">
            <img src={linkedinImg} alt="linkedin"/>
          </a>
        </span>
        <span>
          <a href="mailto:angel.vasquez.unam@gmail.com" target="_blank">
            <img src={mailImg} alt="mail"/>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer