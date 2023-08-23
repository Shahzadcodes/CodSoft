import React from 'react'
import './landingpage.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoFacebook, BiLogoLinkedin, BiSolidPhoneCall, BiTime} from 'react-icons/bi'
import {BsYoutube, BsSearch, BsFillRocketTakeoffFill, BsHeadset} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {Typography, Card, CardContent, CardMedia, Grid, Container} from '@mui/material'
import HeroImg from '../../assets/img2.jpg'
import AboutImg from '../../assets/aboutimg4.png'
import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'


const LandingPage = () => {
  return (
    <>
    <div className="container">

        {/* Navbar */}

        <div className="menu">
            <div className="icons">

                <AiOutlineTwitter style={{height: '20px', width: '20px', color: 'white', paddingLeft: '10px'}}/>
                <BiLogoFacebook style={{height: '20px', width: '20px', color: 'white', paddingLeft: '10px'}}/>
                <BsYoutube style={{height: '20px', width: '20px', color: 'white', paddingLeft: '10px'}}/>
                <BiLogoLinkedin style={{height: '20px', width: '20px', color: 'white', paddingLeft: '10px'}}/>

            </div>

            <div className="contacts">
                <div className='call'>

                <BiSolidPhoneCall className='call_icon'/>
                <p className='phone_no'>+921234567890</p>

                </div>

                <div className="email">

                    <MdEmail className='mail_icon'/>
                    <p className='emailpara'>agency@mail.com</p>

                </div>

                
            </div>

            <div className="button">

                <button className='demo_btn'>Request a demo</button>

            </div>
        </div>


        <div className="nav_bar">

        <div className="logo">
           Agency

        </div>

        <div className="menu_bar">
            <a href="">Home</a>
            <a href="">Blog</a>
            <a href="">Service</a>
            <a href="">Testimonals</a>
            <a href="">Contact us</a>
            <a href="">Buy Now</a>

        </div>

        <div className="search">
            <BsSearch className='search_icons'/>
            
        </div>
    </div>

    {/* Hero Section */}

    <div className="hero_container">

        <div className="img_container">
            <img src={HeroImg} alt="" className='hero_img' />
            <div className="content">
                <h6>We are creative</h6>
                <h3>Creative Digital Agency</h3>
                <p>Contact us for your business marketing</p>
                <button className='read-btn'>Read More</button>
                <button className='request-btn'>Request a demo</button>
               

            </div>
            
      
        </div>

        
    </div>


    {/* Service Section */}

    <div className="service_container">

        <div className="service1">

            <BsFillRocketTakeoffFill className='rocket_icon'/>
            <h3>Launch Business</h3>

        </div>

        <div className="service2">

            <BsHeadset className='headset_icon'/>
            <h3>Online Support Team</h3>

        </div>

        <div className="service3">

            <BiTime className='time_icon'/>
            <h3>Time Management</h3>

        </div>

    </div>

    <div className="about_container">

        <div className="about_content">
            <h2>ABOUT US</h2>

            <h5>15 years, we passionate about achieving better results for our clients</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eos rem cumque, in incidunt dolorum, labore alias illo architecto repellat delectus aliquam sapiente quae voluptatibus! Quae aut dignissimos impedit est.</p>

            <button className='about_btn'>Read More</button>

        </div>

        <div className="about_img_container">
            <img src={AboutImg} alt="" className='about_img'/>

        </div>

    </div>
    

    {/* Service Cards */}

    <div className="card">

        <h2>OUR SERVICES</h2>
    <Container>

   <Grid container spacing={2} marginTop='20px'>

   <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={Card1} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>User Experience</Typography>

                <button className='card_btn'>Read More</button>

              </CardContent>

            </Card>

    </Grid>

    <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={Card2} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center'  gutterBottom>Creative Design</Typography>

                <button className='card_btn'>Read More</button>

              </CardContent>

            </Card>

    </Grid>

    <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={Card3} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center'  gutterBottom>Business Ready</Typography>

                <button className='card_btn'>Read More</button>

              </CardContent>

            </Card>

    </Grid>

    </Grid>
    </Container>

    </div>

    


    
       

   </div>



    
    </>
  )
}

export default LandingPage