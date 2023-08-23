import React from 'react'
import './project.css'
import Navbar from '../Navbar/Navbar'
import {Typography, Card, CardContent, CardMedia, Grid, Container} from '@mui/material'
import P1 from '../../assets/P1.png'
import P3 from '../../assets/P3.png'
import P4 from '../../assets/P4.png'
function Project() {

  return (
    <>

    <Navbar/>

    <Container>

        <Grid container spacing={2} marginTop='150px'>

        <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={P1} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>ECommerce Web App</Typography>
                
                 <a href="https://github.com/Shahzad654/Ecommerce-App-Using-ReactJS" target='blank'>
                    <button className='view_btn'>View Source Code</button>
                 </a>

              </CardContent>

            </Card>

          </Grid>


          <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={P3} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>McDonlad's Web App Clone</Typography>
                
                 <a href="https://github.com/Shahzad654/McDonalds-clone-using-ReactJS" target='blank'>
                    <button className='view_btn'>View Source Code</button>
                 </a>

              </CardContent>

            </Card>

          </Grid>

          <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={P4} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>Weather Web App</Typography>
                
                 <a href="https://github.com/Shahzad654/Weather-App-Using-ReactJS" target='blank'>
                    <button className='view_btn'>View Source Code</button>
                 </a>

              </CardContent>

            </Card>

          </Grid>

        </Grid>

    </Container>    


 
    </>
  )
}

export default Project