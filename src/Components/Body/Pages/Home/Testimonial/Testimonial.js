import React, { useState } from 'react'
import Slider from 'infinite-react-carousel'
import { TestimonialSection, NewTestimonialBox, TestimonialBox, SlideItem, SlideIcon, SlideParagraph, SlideBottom, SlideBottomImage, SlideName, SlideJob } from './TestimonialStyles'
import TestimonialData from './TestimonialData'
import "./Testimonial.css"

// testimonial component for home page
const Testimonial = () => {
  const [ arrows, setArrows ] = useState(false)
  const [ dots, setDots ] = useState(true)
  const [ autoplay, setAutoPlay ] = useState(true)
  const [ pauseOnHover, setPauseOnHover ] = useState(false)
  const [ autoplaySpeed, setAutoPlaySpeed ] = useState(6000)
  const [ slidesToShow, setSlidesToShow ] = useState(3)
  return (
    <TestimonialSection>

      {/* next 3 lines, Header, divider and subheading */}
      <TestimonialBox>
        <h3>Our Testimonials</h3>
        <div className="divider divider-medium" style={{margin: "0 auto"}}></div>
        <h2>A List Of Our Happy Customers</h2>

        {/* The testimonial slider */}
        <Slider arrows={arrows} dots={dots} autoplay={autoplay} pauseOnHover={pauseOnHover} autoplaySpeed={autoplaySpeed} slidesToShow={slidesToShow}>
            {
              // Mapping through the testimonial slider data
              TestimonialData.map(({id,paragraph,icon,name,cName,job}) => (

                // Template structure for each testimonial slide item
                <SlideItem key={id} className="slideItem">
                  <SlideIcon>{icon}</SlideIcon>
                  <SlideParagraph>{paragraph}</SlideParagraph>
                  <SlideBottom>
                    <SlideBottomImage className={cName}>{}</SlideBottomImage>
                    <div className="slideBox">
                      <SlideName>{name}</SlideName>
                      <SlideJob>{job}</SlideJob>
                    </div>
                  </SlideBottom>
                </SlideItem>
              ))
            }
        </Slider>
      </TestimonialBox>


            {/* A different slide for viewport 800px, same as above except without slide, just static div */}
      <NewTestimonialBox className="newTestimonialBox">
        <h3>Our Testimonials</h3>
        <div className="divider divider-medium" style={{margin: "0 auto"}}></div>
        <h2>A List Of Our Happy Customers</h2>
        {
              TestimonialData.map(({id,paragraph,icon,name,cName,job}) => (
                <SlideItem key={id} className="slideItem">
                  <SlideIcon>{icon}</SlideIcon>
                  <SlideParagraph>{paragraph}</SlideParagraph>
                  <SlideBottom>
                    <SlideBottomImage className={cName}>{}</SlideBottomImage>
                    <div className="slideBox">
                      <SlideName>{name}</SlideName>
                      <SlideJob>{job}</SlideJob>
                    </div>
                  </SlideBottom>
                </SlideItem>
              ))
            }
      </NewTestimonialBox>
    </TestimonialSection>
  )
}

export default Testimonial
