import { FaEnvelope, FaFacebook, FaInstagram, FaMap, FaPhone, FaTwitter } from "react-icons/fa";

export default {
  aboutUs : {
    title: "About Us",
    abtUsparagraph: "Offering you the best grooming services at the most affordable price with the topmost comfort. ",
    locationIcon: <FaMap />,
    locationText: "203 Fake St. Mountain View, San Francisco, California, USA",
    aboutUsPhoneIcon: <FaPhone />,
    aboutUsNumber: "+380 999 111 9999",
    aboutUsMessageIcon: <FaEnvelope />,
    aboutUsEmail: "barbyn@domain.com",
  },
  quickLinks : {
    title: "Quick Menu",
    Home: "Home",
    About: "About",
    Services: "Services",
    Contact: "Contact",
  },
  serviceLink : {
    title : "Services",
    Haircut: "Haircut",
    HairStyle: "HairStyle",
    Trimming: "Trimming",
    Shaving: "Shaving",
    SkinCare: "SkinCare",
  },
  newsLetter : {
    title: "NewsLetter",
    paragraph: "To keep in touch with us and receive weekly newletters from us then sign up below",
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
  },
  copyRight : {
    copyRight: "Copyright &copy; 2021 All rights reserved | Made by Barbyn Inc"
  }
}