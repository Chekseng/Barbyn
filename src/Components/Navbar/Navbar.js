import React, { useState, useEffect, useRef } from 'react'
import NavbarData from './NavbarData'
import { MainNav, NavLogo, OuterLogo, InnerLogo, NavMenu, NavList, NavLink, NavToggle, BtnLink } from './NavbarStyles'
import { FaTimes, FaBars } from 'react-icons/fa'
import ButtonFill, { ButtonFillData } from '../Button/ButtonFIll'
import '../Button/Button.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [ click, setClick ] = useState(null)
  const [ navbar, setNavbar ] = useState(false)

  // function to handle click state
  const handleClick = () => {
    setClick(!click)
  }

  // function to change navbar background when window is scrolled past 440px
  const changeBackground = () => {
      if(window.scrollY >= 440) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
  }

  let menuRef = useRef()

  // Function to make navbar disappear on detecting click outside event(navbar)
  const detectNavOutsideClick = (event) => {
    if(!menuRef.current.contains(event.target)){
      setClick(false)
    }
  }

  // useEffect to execute detect click event
  useEffect(() => {
    document.addEventListener('mousedown', detectNavOutsideClick, false)

    return () => {
      document.removeEventListener('mousedown', detectNavOutsideClick, false)
    }
  }, [])

  window.addEventListener('scroll', changeBackground)
  
  
  return (

    // The Main NavBar
    <MainNav className={navbar ? 'active navbar' : 'navbar'} >
      {/* The Nav Logo */}
      <NavLogo >
        <Link to="/"><OuterLogo>BARB<InnerLogo>YN</InnerLogo></OuterLogo></Link>
      </NavLogo>

      {/* The Nav Menu */}
      <NavMenu click={click} ref={menuRef} >
        {
          NavbarData.map(({ id, title, href, activeStyle}) => (
            <NavList key={id}>
              <NavLink to={href} exact activeStyle={activeStyle} activeClassName="active navlink">{title}</NavLink>
            </NavList>
          ))
        }
        <ButtonFill btnStyle="btn-fill" btnSize="btn-medium"><a className="btn-link" href="/#make-appointment">{ButtonFillData.MakeAppointment}</a></ButtonFill>
      </NavMenu>
        


      {/* The Mobile Nav Toggle */}
      <NavToggle onClick={handleClick} className="nav-toggle">
        { click ? <FaTimes /> : <FaBars />}
      </NavToggle>

    </MainNav>
  )
}

export default Navbar
