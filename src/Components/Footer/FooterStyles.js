import styled from 'styled-components'

// NOTE: "FB" STANDS FOR FOOTERBOX

export const FooterContainer = styled.section`
  display: grid;
  padding: 40px 0 10px;
  background-color: var(--secondary-text-color);
  margin-top: -4px;
`

export const FooterBox = styled.article`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 25% 25% 20% 25%;
  padding: 20px 0 50px;
  grid-column-gap: 10px;
  border-bottom: 1px solid var(--quatenary-text-color);

  @media only screen and (max-width: 1000px){
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 40px;
  }

  @media only screen and (max-width: 700px){
    display: grid;
    grid-template-columns: 100%;
  }
`

export const FBSAboutUs = styled.div`

`

export const FBQuickLinks = styled.div`
  @media only screen and (max-width: 700px){
    padding-left: 0;
  }
`

export const FBServiceLinks = styled.div`

`

export const FBNewsLetter = styled.div`
  display: grid;

`

export const FooterCopyRight = styled.article`
  text-align: center;
  padding: 15px 0 10px;
  color: var(--quatenary-text-color);
`