import React from 'react'
import AbtTeamData from './AbtTeamData'
import { MainAbtTeam, AbtTeamBox, AbtTeamItem, AbtTeamImg, AbtTeamName, AbtTeamRole } from './AbtTeamStyles'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './AbtTeam.css'
import { Divider } from '../../Home/HomeAbt/HomeAbtStyles'

const AbtTeam = () => {
  // The About Team Component

  return (
    <MainAbtTeam className="main-abt-team">

      {/* The next 3 lines are Header, Divider and Subheader */}
      <h3>Meet Our Barbers</h3>
      <Divider style={{margin: '0 auto'}}></Divider>
      <h2>Providing The Best Service And Care To You</h2>

      {/* Div that contains the mapped data for individual Team members */}
      <AbtTeamBox>
        {

          // Mapping through the About Team Dynamic data
          AbtTeamData.map(({id,cName, name,role}) => (
            
            // Individual Team Member template structure
            <AbtTeamItem key={id}>
              <AbtTeamImg className={cName}><div className="abt-img-overlay"><FaFacebook /> <FaInstagram /> <FaTwitter /> </div></AbtTeamImg>
              <AbtTeamName>{name}</AbtTeamName>
              <AbtTeamRole>{role}</AbtTeamRole>
            </AbtTeamItem>
          ))
        }
      </AbtTeamBox>
    </MainAbtTeam>
  )
}

export default AbtTeam
