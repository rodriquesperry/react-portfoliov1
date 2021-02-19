import React, { useState } from 'react'
import styled from 'styled-components'
import { Router, NavLink, Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as GoIcons from 'react-icons/go'
import { SideMenuData } from './SideMenuData'
 
const SidebarNav = styled.nav`
  background: rgba(255, 255, 255, 1);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sideNav }) => (sideNav ? '0' : '-100%')}; 
  transition: 350ms ease-in-out;
  z-index: 10;
  box-shadow: .1em 0 .9em skyblue;
`;

const SideMenu = () => {
  const [sideNav, setSideNav] = useState(false);

  const showSideNav = () => setSideNav(!sideNav)

  return (
    <>
      <nav className='nav'>
        <Link className='navToggleIcon' to='#'>
          <FaIcons.FaBars onClick={showSideNav}/>
        </Link>
      </nav>
      <SidebarNav sideNav={sideNav}>
        <div className='sidebarWrap'>
          <Link to='#'>
            <AiIcons.AiOutlineClose className='close' onClick={showSideNav}/>
          </Link>
          <div className='navLinks'>
            <Link className='navLink'>
              <GoIcons.GoHome className='navIcon' />
              <span className='linkText'>Home</span>
            </Link>
            <Link className='navLink'>
              <BsIcons.BsInfoCircle className='navIcon' />
              <span className='linkText'>About</span>
            </Link>
            <Link className='navLink'>
              <BsIcons.BsCodeSlash className='navIcon' />
              <span className='linkText'>Portfolio</span>
            </Link>
            <Link className='navLink'>
              <GoIcons.GoMail className='navIcon' />
              <span className='linkText'>Contact</span>
            </Link>
          </div>
        </div>
      </SidebarNav>
    </>
  )
}

export default SideMenu
