import React from 'react'
import { MainBanner , BannerText, STYLES } from './BannerStyles'
import "./Banner.css"
import Navbar from '../Navbar/Navbar';

// The Banner Component
const Banner = ({children, bannerStyle}) => {

  // Logic for reuseable banner data and styles
  const checkBannerStyle = STYLES.includes(bannerStyle) ? bannerStyle : STYLES[0];

  return (
    <MainBanner className={`banner ${checkBannerStyle}`}>
      <Navbar />
      <BannerText >{children}</BannerText>
    </MainBanner>
  )
}

export default Banner
