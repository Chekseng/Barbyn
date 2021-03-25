import styled from 'styled-components'

// NOTE: THE ABBREVIATION FS -- FEATURED SECTION 
// THEREFORE MFS -- MAINFEATURED SECTION AND SO ON

export const MFS = styled.section`
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  align-items: center;
  padding: 90px 0 70px;
  background-color: #fff6f7;

  @media only screen and (max-width:1100px){
    display: grid;
    grid-template-columns: 100%;
  }
`

export const MFSHeading = styled.h3`
  text-align: center;
  font-size: 35px;
  word-spacing: 2px;
`

export const MFSSubHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  padding-top: 10px;
`

export const MFSBody = styled.div`
  display: grid;
  grid-template-columns: 27% 27% 27%;
  grid-column-gap: 20px;
  justify-content: center;
  text-align: center;
  padding: 20px 0;

  @media only screen and (max-width:700px){
    display: grid;
    grid-template-columns: 90%;
  }
`

export const MFSItem = styled.div`
  background-color: #ffe0e3;
  margin: 0 5px;
  padding: 40px 10px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  box-sizing: border-box;

  &:hover{
    // box-shadow: 3px 3px var(--primary-text-color) inset;
    box-shadow: 1px 1px 12px var(--primary-text-color);
    transition: all ease-in-out 0.5s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  @media only screen and (max-width:700px){
    margin-bottom: 20px;
  }
`

export const MFSIcon = styled.span`
  font-size: 60px;
  padding: 7px 7px 0px;
  color: var(--secondary-text-color);
  text-align: center;
  cursor: pointer;
`

export const MFSItemTitle = styled.h2`
  font-size: 19px;
  font-weight: 600;
  padding: 10px 0 10px;
`

export const MFSItemParagraph = styled.p`
  padding: 0 20px 10px;
  color: var(--tetiary-text-color);
  font-style: italic;
  font-size: 16px;
`

export const MFSItemPrice = styled.span`
  display: block;
  padding-bottom: 10px;
  font-weight: bold;
  font-style: italic;
  font-size: 22px;
  color: var(--primary-text-color)
`