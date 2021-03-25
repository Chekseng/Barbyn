import React from 'react'
import ServicePrizeData from './ServicePrizeData'
import { MainSTSection } from '../ServiceTypes/ServiceTypesStyles'
import { MainSPSection, SPSectionBox, SPSectionUpper, SPSectionPlan, SPSectionAngleDown, SPSectionItem, SPSectionPrice, SPSectionList, SPSectionFlag, SPSectionHeading, SPSectionSubHeading } from './ServicePrizeStyles'
import ButtonFIll, { ButtonFillData } from '../../../../Button/ButtonFIll'
import "./ServicePrize.css"
import { Divider } from '../../Home/HomeAbt/HomeAbtStyles'

const ServicePrize = () => {
  
  return (
    // Service Price component 
    <MainSPSection>

      {/* Next 3 lines are "Header", "Divider" and "Subheading" */}
      <SPSectionHeading>Pricing Plan</SPSectionHeading>
      <Divider style={{margin: '0 auto'}}></Divider>
      <SPSectionSubHeading>Pick Your Desired Pricing Package</SPSectionSubHeading>

      {/* Looping through the desired service prize data and displaying the "basic", "popular" and "premium plan" */}
      <SPSectionBox>
        {
          ServicePrizeData.map((props) => (
            // looping through data to create individual plan
            <SPSectionItem key={props.id} className={props.cName}>
              
              {/* Upper section with "Plan Name", "Plan Label" and "Plan Price" */}

              <SPSectionUpper>
                <SPSectionPlan>{props.plan}</SPSectionPlan>
                <SPSectionPrice>{props.price}</SPSectionPrice>
                <p>Per Service</p>
                
                <SPSectionFlag>{props.flag}</SPSectionFlag>
              </SPSectionUpper>

              <article>
                {/* Service list which is same for the 3 plans "Basic", "Popular" and "Premium" */}
                <SPSectionList><span>{props.iconList[0]}</span>{props.list[0]}</SPSectionList>
                <SPSectionList><span>{props.iconList[1]}</span>{props.list[1]}</SPSectionList>
                <SPSectionList><span>{props.iconList[2]}</span>{props.list[2]}</SPSectionList>
                <SPSectionList><span>{props.iconList[3]}</span>{props.list[3]}</SPSectionList>
                <SPSectionList><span>{props.iconList[4]}</span>{props.list[4]}</SPSectionList>
                <SPSectionList><span>{props.iconList[5]}</span>{props.list[5]}</SPSectionList>
                <SPSectionList><span>{props.iconList[6]}</span>{props.list[6]}</SPSectionList>
                <SPSectionList><span>{props.iconList[7]}</span>{props.list[7]}</SPSectionList>
              </article>

              {/* button component which is unique for each plan */}
              <ButtonFIll btnStyle={props.btnClass} btnSize="btn-medium">{ButtonFillData.MakeAppointment}</ButtonFIll>
            </SPSectionItem>
          ))
        }
      </SPSectionBox>
    </MainSPSection>
  )
}

export default ServicePrize
