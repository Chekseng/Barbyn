import React from 'react'
import ButtonFIll, { ButtonFillData } from '../../../../Button/ButtonFIll'
import FeaturedServiceData, { heading } from './FeaturedServiceData'
import { MFS, MFSHeading, MFSSubHeading, MFSItem, MFSIcon, MFSItemTitle, MFSItemParagraph,MFSItemPrice, MFSBody } from './FeaturedServiceStyle'
import "./FeaturedServices.css"


const FeaturedService = () => {
  // The Home Featured Service Component
  // MFS stands for "MAIN FEATURED SERVICE"
  return (
    <MFS>

      {/* Next 3 lines include heading, divider and subheading */}
      <MFSHeading>
        {heading.heading}
      </MFSHeading>
      <div className="divider divider-medium" style={{ margin: '0 auto'}}></div>
      <MFSSubHeading>{heading.subHeading}</MFSSubHeading>

      <MFSBody>
      {
        // mapping through the featured service data to display individual service items
        FeaturedServiceData.map(({id,icon, title, desc, price}) => (

          // individual service item template structure
          <MFSItem key={id} className="mfs-item">
            <MFSIcon className="mfs-icon">{icon}</MFSIcon>
            <MFSItemTitle>{title}</MFSItemTitle>
            <MFSItemParagraph>{desc}</MFSItemParagraph>
            <MFSItemPrice>{price}</MFSItemPrice>

            {/* button component for service item */}
            <ButtonFIll btnStyle="btn-fill" btnSize="btn-medium"><a href="/services" class="btn-link">{ButtonFillData.SeeMore}</a></ButtonFIll>
          </MFSItem>
        ))
      }
      </MFSBody>

    </MFS>
  )
}

export default FeaturedService
