/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../../assets/images/NavBar-Logo.png';
import Buttons from '../../atoms/Buttons/Buttons';

function Menu({ children }) {
  const { pathname } = useLocation();
  return (
    <ul>
      {children}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/tourpackage">Tour Package</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
    </ul>
  );
}

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles['tourism-site__navbar-container']}>
      <div className={styles['tourism-site__navbar']}>
        <div className={styles['tourism-site__navbar-logo']}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles['tourism-site__navbar-links']}>
          <Menu />
        </div>
      </div>
      <div className={styles['tourism-site__navbar-search-icon']}>
        <i className="fa fa-search" aria-hidden="true" />
        <Buttons title="Sign In" color="#C7923E" />
      </div>
      <div className={styles['tourism-site__navbar-menu']}>
        {toggle ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#000" size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="tourism-site__navbar-menu-container scale-up-center">
            <div className="tourism-site__navbar-menu__container-links">
              <Menu>
                <li>
                  <a href="#sign"> Sign In</a>
                </li>
              </Menu>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
