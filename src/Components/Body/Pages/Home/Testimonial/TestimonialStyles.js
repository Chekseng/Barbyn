import styled from 'styled-components'

export const TestimonialSection = styled.section`
  background-color: var(--secondary-bg);

`

export const TestimonialBox = styled.article`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  padding: 100px 0;

  h3{
    font-size: 35px;
  }

  div.divider + h2{
    font-size: 30px;
    padding: 10px 0 30px;
  }

  @media only screen and (max-width:900px){
    display: none;
  }
`

export const SlideItem = styled.article`
  background-color: var(--tetiary-bg);
  position: relative;
  padding: 30px 0;

  @media only screen and (max-width:900px){
    width: 70%;
    margin: 0 20px 10px 12px;
  }
`

export const SlideIcon = styled.span`
  font-size: 50px;
  color: var(--primary-text-color);
`

export const SlideParagraph = styled.p`
  font-size: 17px;
  padding: 20px;
  text-align: center;
  color: var(--tetiary-text-color);
`

export const SlideBottom = styled.div`
  display: flex;
`

export const SlideBottomImage = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-position: top;
`

export const SlideName = styled.h2`
  padding-left: 30px;
  font-size: 20px;
  font-weight: 500;
  color: var(--primary-text-color);
`

export const SlideJob = styled.p`
  padding-left: 0px;
  font-style: italic;
  color: var(--tetiary-text-color);
`

export const NewTestimonialBox = styled.article`
  @media only screen and (min-width: 900px){
    display: none;
  }


`