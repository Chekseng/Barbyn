import React from 'react'
import { HomeAbtSection, Divider, HomeAbtPic, HomeAbtPicInner, HomeAbtText, AbtTextHeading, AbtTextSubHeading, AbtTextParagraph } from './HomeAbtStyles'
import HomeAbtData from './HomeAbtData'
import ButtonFIll, { ButtonFillData } from '../../../../Button/ButtonFIll'

const HomeAbt = () => {
  // The home about component
  return (
    <HomeAbtSection>

      {/* The home about picture */}
      <HomeAbtPic>
        <HomeAbtPicInner />
      </HomeAbtPic>

      {/* The text section of the home about component */}
      <HomeAbtText>

        {/* next 3 lines are header, divider and subheading */}
        <AbtTextHeading>{HomeAbtData.mainHeading.title}</AbtTextHeading>
        <Divider></Divider>
        <AbtTextSubHeading>{HomeAbtData.mainHeading.subtitle}</AbtTextSubHeading>
        
        <AbtTextParagraph>{HomeAbtData.mainHeading.paragraph}</AbtTextParagraph>
        
        {/* button component for about text section */}
        <ButtonFIll btnStyle="btn-fill" btnSize="btn-medium"><a href="/about" class="btn-link">{ButtonFillData.SeeMore}</a></ButtonFIll>
      </HomeAbtText>

    </HomeAbtSection>
  )
}

export default HomeAbt
