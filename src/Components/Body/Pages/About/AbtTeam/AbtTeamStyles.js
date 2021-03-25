import styled from 'styled-components'

export const MainAbtTeam = styled.section`
  display: grid; 
  grid-template-columns: 80%;
  justify-content: center;
  align-items: center;
  padding: 70px 0 50px;
  text-align: center;
  background-color: var(--secondary-bg);
`

export const AbtTeamBox = styled.article`
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-column-gap: 10px;

  @media only screen and (max-width: 1000px){
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 10px;
  }

  @media only screen and (max-width: 700px){
    display: grid;
    grid-template-columns: 100%;

  }
`

export const AbtTeamItem = styled.div`
  background-color: var(--tetiary-bg);
  text-align: center;
`
export const AbtTeamImg = styled.div`
  padding: 180px 0;
  background-size: cover;
  position: relative;
  transition: all ease 0.5s;
`

export const AbtTeamName = styled.h2`
  font-weight: 500;
  font-size: 19px;
  text-transform: uppercase;
  padding-top: 20px;
`

export const AbtTeamRole = styled.p`
  font-style: italic;
  color: var(--tetiary-text-color);
  padding-bottom: 20px;
`