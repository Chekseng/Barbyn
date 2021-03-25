import React from 'react'
import FooterData from './FooterData'
import { FooterContainer, FooterBox, FBSAboutUs, FBQuickLinks, FBServiceLinks, FBNewsLetter, FBCopyRIght, FooterCopyRight } from './FooterStyles'
import './Footer.css';
import ButtonFIll, { ButtonFillData } from '../Button/ButtonFIll';

// The Footer Component
const Footer = () => {
  return (
    <FooterContainer>

      <FooterBox>

        {/* First Footer section */}
        <FBSAboutUs className="footer-about-us">
          <h2 className="footer-h2">{FooterData.aboutUs.title}</h2>
          <p>{FooterData.aboutUs.abtUsparagraph}</p>
          <div className="icon-box">
            <span>{FooterData.aboutUs.aboutUsPhoneIcon}</span>
            <p>{FooterData.aboutUs.aboutUsNumber}</p>
          </div>
          <div className="icon-box">
            <span>{FooterData.aboutUs.aboutUsMessageIcon}</span>
            <p>{FooterData.aboutUs.aboutUsEmail}</p>
          </div>
        </FBSAboutUs>

        {/* Second Footer Section  */}
        <FBQuickLinks className="footer-quick-links">
          <h2 className="footer-h2">{FooterData.quickLinks.title}</h2>
          <p>{FooterData.quickLinks.Home}</p>
          <p>{FooterData.quickLinks.About}</p>
          <p>{FooterData.quickLinks.Services}</p>
          <p>{FooterData.quickLinks.Contact}</p>
        </FBQuickLinks>


        {/* Third Footer Section */}
        <FBServiceLinks className="footer-service-links">
          <h2 className="footer-h2">{FooterData.serviceLink.title}</h2>
          <p>{FooterData.serviceLink.Haircut}</p>
          <p>{FooterData.serviceLink.HairStyle}</p>
          <p>{FooterData.serviceLink.Trimming}</p>
          <p>{FooterData.serviceLink.Shaving}</p>
          <p>{FooterData.serviceLink.SkinCare}</p>
        </FBServiceLinks>

        {/* Fourth Footer Section */}
        <FBNewsLetter className="footer-newsletter">
          <h2 className="footer-h2">{FooterData.newsLetter.title}</h2>
          <p>{FooterData.newsLetter.paragraph}</p>
          <div>
            <input type="text" placeholder="enter email" />
            <ButtonFIll btnSize="btn-medium">{ButtonFillData.Submit}</ButtonFIll>
          </div>
          <div className="footer-icons">
            <span>{FooterData.newsLetter.facebook}</span>
            <span>{FooterData.newsLetter.twitter}</span>
            <span>{FooterData.newsLetter.instagram}</span>
          </div>
        </FBNewsLetter>
      </FooterBox>

      {/* Footer CopyRight */}
      <FooterCopyRight>
        <p>{FooterData.copyRight.copyRight}</p>
      </FooterCopyRight>

    </FooterContainer>
  )
}

export default Footer
