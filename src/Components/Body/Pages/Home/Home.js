import React from 'react'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Navbar/Navbar'
import Appointment from './Appointment/Appointment'
import FeaturedService from './FeaturedServices/FeaturedService'
import Gallery from './Gallery/Gallery'
import Hero from './Hero/Hero'
import HomeAbt from './HomeAbt/HomeAbt'
import { HomeWrapper } from './HomeStyle'
import Testimonial from './Testimonial/Testimonial'

const Home = ({click,setClick}) => {
  return (
    <HomeWrapper>
      <Navbar click={click} setClick={setClick}/>
      <Hero />
      <HomeAbt />
      <FeaturedService />
      <Gallery />
      <Testimonial />
      <Appointment />
      <Footer />
    </HomeWrapper>
  )
}

export default Home
