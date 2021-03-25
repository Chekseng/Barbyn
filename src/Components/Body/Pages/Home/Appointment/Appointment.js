import React from 'react'
import ButtonFIll, { ButtonFillData } from '../../../../Button/ButtonFIll'
import { AppointmentSection, AppointmentLeft, AppointmentRight, AppointmentTitle, AppointmentForm, AFTextArea, AppointmentFormDiv, AppointmentFormDiv2, InputField, SelectField, SelectFieldOption, AppointmentSubTitle} from './AppointmentStyles'

const Appointment = () => {
  // The appointment component for the home page
  // Note AF: means APPOINTMENT FORM
  return (
    <AppointmentSection>

      {/* The left section of the appointment component  made up of the google map*/}
      <AppointmentLeft>
        <p id="make-appointment"></p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325515.69297321077!2d30.25182065148398!3d50.40213510208048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1613556575680!5m2!1sen!2sua" width="100%" height="600px" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </AppointmentLeft>


      {/* The Right section of the appointment component made up of the form */}
      <AppointmentRight>
        {/* next 3 lines include Heading, divider and subheading */}
        <AppointmentTitle>Appointments</AppointmentTitle>
        <div className="divider divider-medium" style={{marginLeft: "20px"}}></div>
        <AppointmentSubTitle>Book An Appointment With Us</AppointmentSubTitle>
        
        {/* The appointment form */}
        <AppointmentForm>
          <AppointmentFormDiv>
            <InputField type="text" placeholder="First Name" required />
            <InputField type="text" placeholder="Second Name" required/>
          </AppointmentFormDiv>

          <AppointmentFormDiv2>
            <InputField type="date" />
            <SelectField>
              <SelectFieldOption defaultValue hidden>Time</SelectFieldOption>
              <SelectFieldOption>8:00 - 9:30</SelectFieldOption>
              <SelectFieldOption>10:00 - 11:30</SelectFieldOption>
              <SelectFieldOption>1:00 - 2:30</SelectFieldOption>
              <SelectFieldOption>3:00 - 5:30</SelectFieldOption>
            </SelectField>
            <InputField type="text" placeholder="Phone +" required />

          </AppointmentFormDiv2>

          <AFTextArea placeholder="message"></AFTextArea>

          {/* Button component  */}
          <ButtonFIll btnStyle="btn-fill" btnSize="btn-medium">{ButtonFillData.Submit}</ButtonFIll>
        </AppointmentForm>
      </AppointmentRight>

    </AppointmentSection>
  )
}

export default Appointment
