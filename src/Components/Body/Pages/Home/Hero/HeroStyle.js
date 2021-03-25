import styled from 'styled-components'



export const HeroSlide = styled.div`
  text-align: center;
`

export const HeroHeading = styled.h1`
  color: var(--quatenary-text-color);
  font-family: "Poppins", sans-serif;
  font-size: 55px;
  margin-top: -40px;
  padding-bottom: 20px;

  @media screen and (max-width: 800px){
    padding: 0 10px;
  }
`

export const HeroParagraph = styled.p`
  color: var(--quatenary-text-color);
  font-family: "Lato", sans-serif;
  padding: 0px 390px;
  font-size: 20px;
  font-weight: 300;

   @media only screen and (max-width:1200px){
     padding: 0 60px;
   }
`

export const HeroBtnContainer = styled.div`
  margin: 0 auto;
  padding-top: 35px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`