import React from 'react'
import { MainGallery , GalleryTop, GalleryTopImage, GalleryBottom, GBBOx, GBBoxIcon, GBBoxNumber,GBBoxText } from './GalleryStyle'
import { galleryFirstData, gallerySecondData } from './GalleryData'
import './Gallery.css'

const Gallery = () => {
  // Gallery Component Of The Home Page
  return (
    <MainGallery>

      {/* Upper Part Of the Gallery Component */}
      <GalleryTop>

        {/* Mapping throught the gallery top part data */}
        {
          // template structure for the gallery top part
          galleryFirstData.map(({id,cName,children}) => (
            <GalleryTopImage key={id} className={cName}>{children}</GalleryTopImage>
          ))
        }
      </GalleryTop>

        {/* Lower part of gallery component */}
      <GalleryBottom>

        
        {
          // mapping throught data form gallery lower part *
          gallerySecondData.map(({id,number,icon,title}) => (
            // template structure for the gallery lower part
            <GBBOx key={id} className="GBBox">
              <GBBoxIcon className="GBBoxIcon">{icon}</GBBoxIcon>
              <GBBoxNumber>{number}</GBBoxNumber>
              <GBBoxText>{title}</GBBoxText>
            </GBBOx>
          ))
        }
      </GalleryBottom>
    </MainGallery>
  )
}

export default Gallery
