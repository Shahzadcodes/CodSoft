import React from 'react'
import './hero.css'
import Navbar from '../Navbar/Navbar'
import {MdWavingHand} from 'react-icons/md'
import {ImGithub, ImLinkedin, ImGoogle3} from 'react-icons/im'
import {SiFacebook} from 'react-icons/si'
import {Link} from 'react-router-dom'
import HeroImg from '../../assets/image2.jpeg'
import CV from '../../assets/CV.pdf'


const Hero = () => {
  const cvURL = '../../assets/CV.pdf'
  return (
    <>
     <Navbar/>

     <div className="hero_container">

      <div className="content">
        <h1>Hi! I'm Muhammad Shahzad<MdWavingHand className='wavy_hand'/></h1>
        <p>"I am Muhammad Shahzad, a software engineer with a strong passion for building scalable and efficient web applications. With a solid foundation in ReactJS and WordPress, I excel at crafting intuitive user interfaces and implementing robust backend functionalities."</p>

        <div className="social">
          <a href='https://github.com/Shahzad654' target="_blank"><ImGithub className='git_icon'/></a>
          <a href="https://www.linkedin.com/in/muhammadshahzad413/" target="_blank"><ImLinkedin className='link_icon'/></a> 
          <a href="https://Shahzadj2001@gmail.com" target="_blank"><ImGoogle3 className='gog_icon'/></a>
          <a href="https://www.facebook.com/Shahzad438/" target="_blank"><SiFacebook className='fb_icon'/></a>
        </div>

        <div className='hero_links'>
        <Link to='/contact' className='contact-btn'>CONTACT ME</Link>
        <a href={CV} target='_blank' className='contact-btn'>SEE MY RESUME</a>

        </div>

        

      </div>

      <div className="hero_image">

        <img src={HeroImg} alt="" className='hero_img' />

      </div>

     </div>
      
    </>
  )
}

export default Hero
