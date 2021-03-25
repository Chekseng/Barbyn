import styled from 'styled-components'

export const HomeAbtSection = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 40% 40%;
  justify-content: center;
  align-items: center;  
  padding: 50px;

  @media only screen and (max-width:900px){
    display: grid;
    grid-template-columns: 90%;
  }
`

export const HomeAbtPic = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const HomeAbtPicInner = styled.div`
  background-image: url('https://images.pexels.com/photos/2061820/pexels-photo-2061820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  padding: 250px 100px;
  background-size: cover;
  width: 70%;
  background-position: center;
  margin-right: 50px;
  margin-bottom: 40px;

  @media only screen and (max-width: 900px){
    width: 100%;
    margin-right: 0;
  }
`

export const HomeAbtText = styled.div`
  padding: 0 30px;

  @media screen and (max-width:900px){
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`

export const Divider = styled.div`
  height: 4px;
  background-color: var(--primary-text-color);
  width: 120px;

  @media only screen and (max-width:900px){
    margin: 0 auto;
  }
`

export const AbtTextHeading = styled.h3`
  font-size: 37px;

  @media only screen and(max-width:900px){
    display: 
  }
`

export const AbtTextSubHeading = styled.h2`
  font-size: 30px;
  padding-bottom: 10px;
  padding-top: 5px;

  @media only screen and (max-width:900px){
    text-align: center;
  }
`

export const AbtTextParagraph = styled.p`
  padding: 0 60px 20px 0 ;
`