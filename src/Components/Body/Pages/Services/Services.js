import React from 'react'
import { ServiceWrapper } from './ServiceStyles'
import Banner from '../../../Banner/Banner'
import BannerData from '../../../Banner/BannerData'
import { BannerText } from '../../../Banner/BannerStyles'
import { serviceBanner } from '../../../Banner/BannerData'
import Footer from '../../../Footer/Footer'
import Testimonial from '../Home/Testimonial/Testimonial'
import ServiceTypes from './ServiceTypes/ServiceTypes'
import ServicePrize from './ServicePrize/ServicePrize'
import Subscribe from '../About/Subscribe/Subscribe'

const Services = () => {
  return (
    // Sevice Page Component made of sub components including
    <ServiceWrapper>
      <Banner bannerStyle="banner-services"><BannerText></BannerText>{serviceBanner.title}</Banner>
      <ServiceTypes />

      {/* The Subscribe component is imported from the About Component */}
      <Subscribe />
      <ServicePrize />

      {/* The Testimonial component is originally imported from the Home Page Component */}
      <Testimonial /> 
      <Footer />
    </ServiceWrapper>
  )
}

export default Services
