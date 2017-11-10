//@flow
import React from 'react'
import st from './NavBar.module.css'
import Link from 'gatsby-link'
import {HamburgerIcon} from '../icons/HamburgerIcon'

export const NavBar = () => (
  <div className={st.header}>
    <nav className={st.wrapper}>
      <div className={st.menu}>
        <div className={st.hamburger}>
          <HamburgerIcon className={st.hamburgerIcon} />
        </div>

        <ul className={st.menuList}>
          <li className={st.menuItem}>
            <Link to="/">Студия</Link>
          </li>
          <li className={st.menuItem}>
            <Link to="/production">Продакшн</Link>
          </li>
          <li className={st.menuItem}>
            <Link to="/equipment">Оборудование</Link>
          </li>
          <li className={st.menuItem}>
            <Link to="/school">Школа</Link>
          </li>
          <li className={st.menuItem}>
            <Link to="/team">Команда</Link>
          </li>
          <li className={st.menuItem}>
            <Link to="/price">Цены</Link>
          </li>
          <li className={st.menuItem}>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </div>

      <Link to="/" className={st.logo}>
        <img
          src="http://via.placeholder.com/150x50"
          alt="Galernaya 20 - студия звукозаписи, аренда оборудования, продюсерский центр, аранжировка песен"
          className={st.logoImg}
        />
      </Link>

      <div className={st.contacts}>8 (812) 994 54 97</div>
    </nav>
  </div>
)
