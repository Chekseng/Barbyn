import React from 'react'
import Banner from '../../../Banner/Banner'
import { aboutBanner } from '../../../Banner/BannerData'
import { BannerText } from '../../../Banner/BannerStyles'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Navbar/Navbar'
import HomeAbt from '../Home/HomeAbt/HomeAbt'
import { AboutWrapper } from './AboutStyles'
import AbtTeam from './AbtTeam/AbtTeam'
import Subscribe from './Subscribe/Subscribe'

const About = () => {
  return (
    <AboutWrapper>
      <Banner bannerStyle="banner-about">
        <BannerText>{aboutBanner.title}</BannerText>
      </Banner>

      {/* The homeAbout component is imported from the home component */}
      <HomeAbt />
      <Subscribe />
      <AbtTeam />
      <Footer />
    </AboutWrapper>
  )
}

export default About
