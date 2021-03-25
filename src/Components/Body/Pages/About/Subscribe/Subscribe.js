import React from 'react'
import ButtonFIll, { ButtonFillData } from '../../../../Button/ButtonFIll'
import { Divider } from '../../Home/HomeAbt/HomeAbtStyles'
import { MainSubscribe, SubscribeHeading, SubscribeParagraph, SubscribeBox, SubscribeInput } from './SubscribeStyles'


const Subscribe = () => {
  // The Subscribe Component
  return (
    <MainSubscribe>
      {/* Next 3 lines are the "Header", "Divider" and "Paragraph" */}
      <SubscribeHeading>Subscribe To Newsletter</SubscribeHeading>
      <Divider style={{backgroundColor: 'var(--quatenary-text-color)', margin: '0 auto'}}></Divider>
      <SubscribeParagraph>To keep in touch with us and receive weekly newletters from us then sign up below .</SubscribeParagraph>

      {/* The Subscribe email form */}
      <SubscribeBox>
        <SubscribeInput placeholder="enter email" required/>
        <ButtonFIll btnStyle="btn-fill" btnSize="btn-medium">{ButtonFillData.Submit}</ButtonFIll>
      </SubscribeBox>
    </MainSubscribe>
  )
}

export default Subscribe
