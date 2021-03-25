import React from 'react'
import { ShowBtn, STYLES, SIZES } from './ButtonFIllStyle'

// Button Data for different instances
export const ButtonFillData = {
  SeeMore: 'See More',
  MakeAppointment: 'Make Appointment',
  ContactUs: 'Contact Us',
  Submit: 'Submit',
}

// Button component
const ButtonFIll = ({ children, btnStyle, btnSize}) => {

  // Logic for dynamic button styles
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  // Logic for dynamic button sizes
  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <ShowBtn className={`btn ${checkBtnStyle} ${checkBtnSize}`}>
      {children}
    </ShowBtn>
  )
}

export default ButtonFIll
