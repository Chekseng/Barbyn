import styled from 'styled-components'

// AF stands for "APPOINTMENT FORM"

export const AppointmentSection = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;

  @media only screen and (max-width: 1000px){
    display: grid;
    grid-template-columns: 100%;
  }
`

export const AppointmentLeft = styled.article`
`
export const AppointmentRight = styled.article`
  display: grid;
  padding: 60px 0 0 40px;

  @media screen and (max-width: 900px){
    padding: 60px 10px;
  }
`

export const AppointmentForm = styled.form`
  width: 80%;
  padding: 20px;

  @media only screen and (max-width: 900px){
    width: 100%;
    padding: 0 20px;
  }
`

export const AppointmentFormDiv = styled.div`
  display: grid;
  grid-template-columns: 48% 48.5%;
  grid-column-gap: 20px;
  padding-bottom: 20px;
`

export const InputField = styled.input`
  border: none;
  border-bottom: 2px solid var(--primary-text-color);
  padding: 15px 20px;
  &::placeholder{
    color: var(--primary-text-color);
    font-style: italic;
    font-size: 16px;
  }
  &::placeholder:focus{
    font-style: normal;
  }
`

export const AppointmentFormDiv2 = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  padding-bottom: 20px;
  grid-column-gap: 20px;
`

export const SelectField = styled.select`
  border: none;
  border-bottom: 2px solid var(--primary-text-color);
  
`

export const SelectFieldOption = styled.option`
  font-style: italic;
  font-size: 16px;
  color: var(--primary-text-color);
`

export const AppointmentTitle = styled.h3`
  font-size: 30px;
  padding-left: 20px;
  position: relative;
`

export const AppointmentSubTitle = styled.h2`
  font-size: 30px;
  padding: 0 0 0 20px;
  color: var(--secondary-text-color);

  @media screen and (max-width:800px){
    padding: 20px;
  }
`

export const AFTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid var(--primary-text-color);
  padding: 20px;

  &::placeholder{
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
    color: var(--primary-text-color);
  }
`