import React from 'react'
import './skills.css'
import Navbar from '../Navbar/Navbar'
import {Typography, Card, CardContent, CardMedia, Grid, Container} from '@mui/material'
import Card1 from '../../assets/card1.webp'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import Card4 from '../../assets/card4.png'
import Card5 from '../../assets/card5.webp'
import Card6 from '../../assets/card6.png'

const Skills = () => {
  return (
    <>

    <div className="navbar">
    <Navbar/>

    </div>
    

    <Container>
        <Grid container spacing={2} style={{marginTop: '50px'}}>

        <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={Card1} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>JavaScript</Typography>
              </CardContent>

            </Card>

          </Grid>


          <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={Card2} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>ReactJS</Typography>

              </CardContent>

            </Card>

          </Grid>

          <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={Card3} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>Material UI</Typography>
              </CardContent>

            </Card>

          </Grid>

          <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={Card4} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>NodeJS</Typography>

              </CardContent>

            </Card>

          </Grid>

          
          <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={Card5} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>Agile</Typography>
              </CardContent>

            </Card>

          </Grid>

          
          <Grid item padding='20px 0' xs={12} sm={6} md={4}>
            <Card height='100%' display='flex' direction='column'>
            <CardMedia component="img" image={Card6} title='card image' height='200px' object-fit='cover' width='100%'/>
              <CardContent>
                <Typography variant='h5' align='center' gutterBottom>MongoDB</Typography>

              </CardContent>

            </Card>

          </Grid>

        </Grid>
      </Container>

        
      
    </>
  )
}

export default Skills
