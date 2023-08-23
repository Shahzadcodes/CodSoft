import React from 'react'
import './mobile.css'
import {Link} from 'react-router-dom'

const Mobile = () => {
  return (
    <>
    <div className="mobile_menu">
        <ul>

           <li>
            <Link to='/' className='menu_link'>Home</Link>

            </li>

            <li>
            <Link to='/skill' className='menu_link'>Skills</Link>

            </li>

            <li>
            <Link to='/project' className='menu_link'>Projects</Link>

            </li>

            <li>
            <Link to='/service' className='menu_link'>Service</Link>

            </li>

            <li>
            <Link to='/experience' className='menu_link'>Experience</Link>

            </li>

            <li>
            <Link to='/contact' className='menu_link'>Contact Me</Link>

            </li>

        </ul>
                   
            
    </div>
      
    </>
  )
}

export default Mobile
