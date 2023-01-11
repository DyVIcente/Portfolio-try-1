import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import logo from '../../assets/react.svg'
import { useState } from 'react'
import {
  AiFillHome,
  AiFillProject,
  AiFillRocket,
  AiFillQuestionCircle,
} from 'react-icons/ai'

// BEM => BLOCK ELEMENT MODIFIER  'CSS NAMING'

const Menu = () => (
  <>
    <p>
      <a href="#home">
        <AiFillHome />
        {'          '}
        Home
      </a>
    </p>
    <p>
      <a href="#wgpt3">
        <AiFillProject />
        {'          '}
        Projets
      </a>
    </p>
    <p>
      <a href="#possibility">
        <AiFillRocket />
        {'          '}
        Technologies
      </a>
    </p>
    <p>
      <a href="#features">
        <AiFillQuestionCircle />
        {'          '}A propos
      </a>
    </p>
  </>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>PortFolio</p>
      </div>
      <div className="lp">
        <div>
          <a href="https://github.com/DyVIcente">
            <AiFillGithub />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/dylan-vicente/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
