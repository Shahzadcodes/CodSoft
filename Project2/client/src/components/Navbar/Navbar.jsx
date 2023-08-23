import {React, useState} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import Mobile from '../MobileMenu/Mobile'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  function MenuChange(){
    setMenu(!menu)
  }

  return (
    <>
    <div className="nav_container">
        <div className="logo">
        <Link to='/' className='menu_link_home'>Ｍｕｈａｍｍａｄ Ｓｈａｈｚａｄ</Link>

        </div>

        <div className="menu">
            <Link to='/skill' className='menu_link'>Skills</Link>
            <Link to='/project' className='menu_link'>Projects</Link>
            <Link to='/service' className='menu_link'>Service</Link>
            <Link to='/experience' className='menu_link'>Experience</Link>
            <Link to='/contact' className='menu_link'>Contact Me</Link>
        </div> 

        {menu ? <Mobile/> : <GiHamburgerMenu onClick={MenuChange} className='ham_icon'/>}
        
        
    </div>
      
    </>
  )
}

export default Navbar
