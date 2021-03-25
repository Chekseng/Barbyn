import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';
import "./Navbar.css"

export const MainNav = styled.nav`
  @media only screen and (max-width: 1240px){
    background-color: var(--secondary-text-color);
    padding: 15px 25px;
  }

  @media only screen and (max-width: 800px){
    padding: 20px 20px 20px;
    display: flex;
    flex-flow: column;
    width: 100%;
    justify-content: flex-start;
  }
`

export const NavLogo = styled.div`
  font-size: 45px;
  width: 100%;
`

export const OuterLogo = styled.span`
  color: var(--quatenary-text-color);
  font-family: "Ceviche One", sans-serif;
`

export const InnerLogo = styled.span`
  color: var(--primary-text-color);
  font-family: "Ceviche One", sans-serif;
`

export const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 1700px;


  @media only screen and (max-width: 800px){
    flex-direction: column;
    display: ${({click}) => click ? 'flex' : "none"};
    width: 100%;
    padding-top: 20px;
  }
`

export const NavList = styled.li`
  padding: 10px 15px;
  margin: 5px;
  font-size: 18px;
`

export const NavLink = styled(Link)`
  color: var(--quatenary-text-color);
  
  &:hover{
    color: var(--primary-text-color);
    outline: none;
  }
  &.active{
    color: var(--primary-text-color);
  }  
`

export const NavToggle = styled.div`
  font-size: 35px;
  color: var(--quatenary-text-color);
  display: none;
  position: absolute;
  margin: 30px 20px;
  transition: all 0.5s ease-in-out;
  
  @media only screen and (max-width:800px){
    display: block;
    color: (--var-quatenary-text-color);  
    positin: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`