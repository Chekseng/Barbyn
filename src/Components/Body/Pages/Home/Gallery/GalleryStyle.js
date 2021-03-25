import styled from 'styled-components'

export const MainGallery = styled.section`
`

export const GalleryTop = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1100px){
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 0;
  }

  @media screen and (max-width: 700px){
    display: grid;
    grid-template-columns: 100%;
  }
`

export const GalleryTopImage = styled.div`
  padding: 190px 0;
  width: 400px;

  @media only screen and (max-width: 1100px){
    width: 100%;
  }

`

export const GalleryBottom = styled.div`
  background-image: var(--secondary-gradient),url('https://images.pexels.com/photos/4449790/pexels-photo-4449790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 75%;
  display: grid;
  justify-content: center;
  grid-template-columns: 20% 20% 20% 20%;
  padding: 70px 0 40px;
  height: 230px;

  @media only screen and (max-width:900px){
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 0;
    grid-row-gap: 35px;
    height: 430px;
  }
`

export const GBBOx = styled.div`
  text-align: center;
  padding: 0 80px;
  cursor: pointer;
  
  @media only screen and (max-width:900px){
    width: 100%;
    margin: 0 auto;
  }
`

export const GBBoxIcon = styled.span`
  border: 2px solid var(--primary-text-color);
  padding: 10px 10px 0px;
  font-size: 40px;
  color: var(--primary-text-color);
  transition: all ease-in-out 0.5s;
  cursor: pointer;
`

export const GBBoxNumber = styled.h5`
  padding-top: 20px;
  font-size: 30px;
  font-style: normal;
  color: var(--primary-text-color);
`

export const GBBoxText = styled.p`
  color: var(--primary-bg);
  font-style: italic;
  padding-top: 10px;
`