import styled from 'styled-components'

//  NOTE CF MEANS CONTACT FORM

export const MainCFSection = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: 80%;
  padding: 60px 0;
`

export const MainCFTitle = styled.h3`
  font-size: 35px;
  text-align: center;
`

export const MainCFSubtitle = styled.p`
  text-align: center;
  padding: 10px 240px 40px;
  font-size: 19px;
  color: var(--secondary-text-color);

  @media only screen and (max-width:1300px){
    padding: 10px 10px 40px;
  }

  @media only screen and (max-width:800px){
    padding: 10px 10px 40px;
  }
`

export const CFSectionUpper = styled.article`
  display: grid;
  grid-template-columns: 67% 31%;
  justify-content: space-between;

  @media only screen and (max-width: 1100px){
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 30px;
  }
`

export const CFForm = styled.form`
  background-color: var(--secondary-bg);
  display: grid;
  padding: 50px 40px;
`

export const CFFormBox = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;

  @media only screen and (max-width:800px){
    display: grid;
    grid-template-columns: 100%;
  }
`

export const CFFormTextArea = styled.textarea`
  padding: 60px 0;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--primary-text-color);
  margin-bottom: 20px;
  font-size: 17px;
  font-style: italic;
  color: var(--tetiary-text-color);
`

export const CFInfoSection = styled.div`
  background-color: var(--secondary-bg);
`

export const CFSectionBottom = styled.article`
  margin: 50px 0;
`