import styled from 'styled-components'

export const MainSubscribe = styled.section`
  background-image: var(--secondary-gradient) , url('https://images.unsplash.com/photo-1610726578286-8b77a4df7a77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80');
  background-attachment: fixed;
  color: var(--quatenary-text-color);
  text-align: center;
  padding: 40px 0;
`

export const SubscribeHeading = styled.h2`
  font-size: 35px;
  color: var(--quatenay-text-color);
  padding: 20px 0 10px;
`

export const SubscribeParagraph = styled.p`
  padding: 10px 400px;

  @media only screen and (max-width:1000px){
    padding: 10px 30px 30px;
  }
`

export const SubscribeBox = styled.div`
  width: 30%;
  margin: 0 auto;

  @media only screen and (max-width: 1000px){
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 10px;
  }
`
export const SubscribeInput = styled.input`
  padding: 10px 15px;
  border: none;
  border-bottom: 2px solid var(--primary-text-color);
  background-color: transparent;
  margin-right: 10px;
  color: var(--quatenary-text-color);

  @media only screen and (max-width: 1000px){
    margin-right: 0;
  }

  &::placeholder{
    font-style: italic;
  }
`