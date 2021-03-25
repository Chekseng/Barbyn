import styled from 'styled-components'

export const MainSPSection = styled.section`
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  align-items: center;
  padding: 80px 0 70px;
`

export const SPSectionHeading = styled.h3`
  font-size: 35px;
  text-align: center;
`

export const SPSectionSubHeading = styled.h2`
  text-align: center;
  font-size: 30px;
  padding: 10px 0 40px;
`

export const SPSectionBox = styled.section`
  display: grid;
  grid-template-columns: 27% 32% 27%;
  justify-content: center;
  grid-column-gap: 20px;
  align-items: flex-start;
  overflow: hidden;
  padding-bottom: 50px;

  @media screen and (max-width:1000px){
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 30px;
    align-items: stretch;
  }

  @media screen and (max-width: 700px){
    grid-template-columns: 100%;
  }
`

export const SPSectionItem = styled.article`
  text-align: center;
  overflow: hidden;
  background-color: var(--primary-bg);
  padding-bottom: 30px;
  position: relative;
  transition: all ease-in-out 0.5s;

  &:hover{
    box-shadow: 1px 1px 15px var(--primary-text-color);
    transition; all ease-in-out 0.5s;
  }

`

export const SPSectionUpper = styled.div`
  position: relative;
  margin-bottom: 30px;
  
  & > p:not(:last-child){
    color: var(--quatenary-text-color);
  }

  & + article{
    margin-bottom: 10px;
  }
`

export const SPSectionFlag = styled.p`
  position: absolute;
  padding: 5px 80px;
  transform: rotate(-45deg);
  text-align: center;
`

export const SPSectionPlan = styled.h2`
  color: var(--quatenary-text-color);
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid var(--quatenary-text-color);
  margin: 0 70px;
  padding-bottom: 8px;
`

export const SPSectionPrice = styled.h1`
  font-size: 40px;
  color: var(--quatenary-text-color);

`

export const SPSectionAngleDown = styled.span`
  padding: 10px 10px 5px;
  font-size: 30px;
  border: 4px solid white;
  border-radius: 50%;
  color: var(--quatenary-text-color);
  position: absolute;
`

export const SPSectionList = styled.p`
  padding: 10px;
  font-style: italic;
  align-items: center;
  display: flex;
  justify-content: center;


  & > span{
    color: green;
    padding-right: 10px;
  }
`