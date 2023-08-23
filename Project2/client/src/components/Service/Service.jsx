import React from 'react'
import Navbar from '../Navbar/Navbar'
import './service.css'
import S1 from '../../assets/service1.png'
import S2 from '../../assets/service2.png'
import S3 from '../../assets/service3.jpg'


const Service = () => {
  return (
    <>
    <Navbar/>

    <div className="service_container">
      <div className="service_card">
        <img src={S1} alt="" />
        <h2>Web Development</h2>
        <p>Empowering your digital presence through innovative web solutions tailored to your needs.
            Crafting engaging and functional websites resonate with your audience and goals.</p>
      </div>

      <div className="service_card">
        <img src={S2} alt="" />
        <h2>API Integration</h2>
        <p>Seamlessly connecting your applications with diverse functionalities through expert API integration.</p>
      </div>

      <div className="service_card">
        <img src={S3} alt="" />
        <h2>Website Maintenance</h2>
        <p>Reliable website maintenance ensuring your online platform runs flawlessly while you focus on your core business.</p>
      </div>

      </div>
      </>

    
      
    
  )
}

export default Service
