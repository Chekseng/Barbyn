import React, { useState } from 'react'
import Slider from 'infinite-react-carousel'
import { HeroHeading, HeroParagraph, HeroSlide, HeroBtnContainer } from './HeroStyle'

import HeroData from './HeroData'
import './Hero.css'
import ButtonFIll, { ButtonFillData } from '../../../../Button/ButtonFIll'

// Hero component of Home Page
const Hero = () => {
  const [ autoplay, setAutoplay ] = useState(true)
  const [ autoplaySpeed, setautoplaySpeed ] = useState(6000)
  const [ pauseOnHover, setPauseOnHover ] = useState(false);
  return (
    
    // Hero component Carousel slider of the home page
    <Slider className="main-slider" autoplay={autoplay} autoplaySpeed={autoplaySpeed} pauseOnHover={pauseOnHover}>
     {

      //  Mapping through the data for hero data
       HeroData.map(({id,heading,paragraph, cName}) => (

        // template structure for each hero slide
         <HeroSlide key={id} className={cName}>
           <HeroHeading>{heading}</HeroHeading>
           <HeroParagraph>{paragraph}</HeroParagraph>

           {/* Hero Slide Button container (with buttons) */}
           <HeroBtnContainer>
            <ButtonFIll btnSize="btn-large" btnStyle="btn-fill-hero-large">
              <a className="btn-link" href="#make-appointment">{ButtonFillData.MakeAppointment}</a>
            </ButtonFIll>
            <ButtonFIll btnStyle="btn-outline-hero-large" btnSize="btn-large">
              <a href="/contact" className="btn-link-reverse">{ButtonFillData.ContactUs}</a>
            </ButtonFIll>
        </HeroBtnContainer>
         </HeroSlide>
       ))
     }
    </Slider>
  )
}

export default Hero