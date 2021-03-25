import React from 'react'
import { MainSTSection, STSectionBox, STItem, STTItle, STIcon, STParagraph, STPrize } from './ServiceTypesStyles'
import ServiceTypesData from './ServiceTypesData'

const ServiceTypes = () => {
  // The service type component
  return (
    <MainSTSection>
      <STSectionBox>
        {
          // getting serviceType Dynamic data and mapping through it 
          ServiceTypesData.map(({id, icon, title, desc,price}) => (
            
            // Service Type individual items template structure made of
            // "Icon", "Title","Description","Prize"
            <STItem key={id}>
              <STIcon>{icon}</STIcon>
              <STTItle>{title}</STTItle>
              <STParagraph>{desc}</STParagraph>
              <STPrize>{price}</STPrize>
            </STItem>
          ))
        }
      </STSectionBox>
    </MainSTSection>
  )
}

export default ServiceTypes
