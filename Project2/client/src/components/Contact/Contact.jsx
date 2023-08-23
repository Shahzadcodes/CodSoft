import React from 'react'
import './contact.css'
import Navbar from '../Navbar/Navbar'
import {BsLinkedin, BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'



const Contact = () => {
  return (
    <>
    <Navbar/>

    <div className="contact_container">
      <div className="linkdein">
        <BsLinkedin className='din_icon'/>
        <a href="https://www.linkedin.com/in/muhammadshahzad413/" target='_blank'>Visit Linkedin</a>
      </div>

      <div className="phone">
        <BsFillTelephoneFill className='ph_icon'/>
        <h4>+923143313739</h4>


      </div>

      <div className="email">
        <MdEmail className='mail_icons'/>
        <h4>dev.shahzad413@gmail.com</h4>


      </div>
    </div>
      
    </>
  )
}

export default Contact
