import styled from 'styled-components'

// ST stands for Service Types

export const MainSTSection = styled.section`
  display: grid;
  grid-template-columns: 80%;
  justify-content: center;
  align-items: center;
  padding: 70px 0 60px;
`

export const STSectionBox = styled.article`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: center;
  grid-gap: 20px;

  @media only screen and (max-width: 1000px){
    display: grid;
    grid-template-columns: 50% 50%;
  }

  @media only screen and (max-width: 700px){
    grid-template-columns: 100%;
  }
`

export const STItem = styled.div`
  background-color: var(--primary-bg);
  padding: 30px 10px;
  text-align: center;
  transition: all ease 0.5s;

  &:hover{
    box-shadow: 1px 1px 12px var(--primary-text-color);
    transition: all ease 0.5s;
  }
`

export const STTItle = styled.h2`
  font-size: 18px;
  font-weight: 500;
`

export const STIcon = styled.i`
  font-size: 60px;
`

export const STParagraph  = styled.p`
  font-size: 16px;
  padding: 10px 20px;
  color: var(--tetiary-text-color);
  font-style: italic;
`

export const STPrize = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: var(--primary-text-color);
`