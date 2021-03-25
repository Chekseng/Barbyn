import React from 'react'
import ButtonFIll, { ButtonFillData } from '../../../../Button/ButtonFIll'
import { CFSectionUpper, CFForm, CFFormBox, CFFormTextArea, CFInfoSection, MainCFSection, MainCFTitle, MainCFSubtitle, CFSectionBottom } from './ContactFormStyles'
import './ContactForm.css'
import { Divider } from '../../Home/HomeAbt/HomeAbtStyles'

const ContactForm = () => {
  return (
    // The contact form component
    <MainCFSection>

        {/* Main Contact Form Title */}
        <MainCFTitle>
          Contact Us
        </MainCFTitle>
        <Divider style={{ margin: '0 auto'}}></Divider>
        <MainCFSubtitle>
          You can leave a message or contact us through the form below. Also, you can visit ,email or call us at the addresses below.
        </MainCFSubtitle>
      <CFSectionUpper>
        
        {/* Contact Form Section */}
        <CFForm>
          {/* Main Form Inputs */}
          <CFFormBox className="form-box">
            <input type="text" placeholder="First Name" required className="form-input"/>
            <input type="text" placeholder="Last Name" required className="form-input"/>
          </CFFormBox>

          <input type="email" placeholder="Enter Email" required className="form-input"/>
          <input type="text" placeholder="Enter Subject"  className="form-input"/>
          <CFFormTextArea placeholder="Message" />

          <div>
            <ButtonFIll btnSize="btn-medium">{ButtonFillData.Submit}</ButtonFIll>
          </div>
        </CFForm>

        {/* Sidbar information section */}
        <CFInfoSection className="info-section">
          <h2>Address</h2>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>

          <h2>Phone</h2>
          <p>+1 999 9999</p>

          <h2>Email Address</h2>
          <p>info@domain.barbyn</p>

          <h2>More Info</h2>
          <span>For More information, subscribe to our newsletter, sign up or contact us with any of the above address details.</span>
        </CFInfoSection>
      </CFSectionUpper>

      {/* Google Map Location */}
      <CFSectionBottom>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.6878149165!2d30.25251124457522!3d50.40169904706421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1613667119954!5m2!1sen!2sua" width="100%" height="450" frameBorder="0" style={{ border: '0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </CFSectionBottom>
    </MainCFSection>
  )
}

export default ContactForm
