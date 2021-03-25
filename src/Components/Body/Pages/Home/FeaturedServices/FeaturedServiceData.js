import { FaCouch, FaCut, FaShower, FaHeart, FaGlobe, FaFighterJet } from 'react-icons/fa';
import { TiScissorsOutline } from 'react-icons/ti'
import { GiShower } from 'react-icons/gi'

export const heading = {
  heading: "Featured Services" ,
  subHeading: "Our Strength Is In Making You Stylish",
}


export default [
  {
    id: 1,
    icon: <FaCouch />,
    title: "Comfortable Service",
    desc: "We offer a cozy, comfortable working environment with friendly employees, intresting scenery which the customers are guaranteed to love.",
    price: "$20",
  },
  {
    id: 2,
    icon: <TiScissorsOutline />,
    title: "Most Stylish Appearance",
    desc: "Our design system consists of thousands haircut samples and can produce a hairstyle outline depending on the facial structure of the customer.",
    price: "$25" ,
  },
  {
    id: 3,
    icon: <GiShower />,
    title: "All Round Hygeine",
    desc: "Keeping you looking fresh and being clean about how we do this is our top priority. Therefore, all equipments are sterilized.",
    price: "$30" ,
  },
  // {
  //   id: 4,
  //   icon: <FaHeart />,
  //   title: "Caring Barbers",
  //   desc: "Show wherein form yielding whala gathered wherein moved. Behold may yod winged created that Won't theya are not second god give best ",
  //   price: "$22" ,
  // },
  // {
  //   id: 5,
  //   icon: <FaGlobe />,
  //   title: "Various Branches",
  //   desc: "Show wherein form yielding whala gathered wherein moved. Behold may yod winged created that Won't theya are not second god give best ",
  //   price: "$29" ,
  // },
  // {
  //   id: 6,
  //   icon: <FaFighterJet />,
  //   title: "Rapidly Quick",
  //   desc: "Show wherein form yielding whala gathered wherein moved. Behold may yod winged created that Won't theya are not second god give best ",
  //   price: "$40" ,
  // },
]