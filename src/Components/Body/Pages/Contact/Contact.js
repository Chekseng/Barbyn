import React from 'react'
import Banner from '../../../Banner/Banner'
import { contactBanner } from '../../../Banner/BannerData'
import { BannerText } from '../../../Banner/BannerStyles'
import Footer from '../../../Footer/Footer'
import Navbar from '../../../Navbar/Navbar'
import ContactForm from './ContactForm/ContactForm'
import { ContactWrapper } from './ContactStyles'

const Contact = () => {
  return (
    <ContactWrapper>
      <Banner bannerStyle="banner-contact">
        <BannerText>
          {contactBanner.title}
        </BannerText>
      </Banner>

      <ContactForm />
      <Footer />
    </ContactWrapper>
  )
}

export default Contact
