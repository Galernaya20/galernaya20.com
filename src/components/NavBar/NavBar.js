//@flow
import React from 'react'
import st from './NavBar.module.css'
import Link from 'next/link'

export const NavBar = () => (
  <div className={st.header}>
    <nav className={st.wrapper}>
      <Link href="/">
        <a className={st.logo}>
          <img
            src="http://via.placeholder.com/150x50"
            alt="Galernaya 20 - студия звукозаписи, аренда оборудования, продюсерский центр, аранжировка песен"
            className={st.logoImg}
          />
        </a>
      </Link>

      <ul className={st.menu}>
        <li className={st.menuItem}>
          <Link href="/"><a>Студия</a></Link>
        </li>
        <li className={st.menuItem}>
          <Link href="/production"><a>Продакшн</a></Link>
        </li>
        <li className={st.menuItem}>
          <Link href="/equipment"><a>Оборудование</a></Link>
        </li>
        <li className={st.menuItem}>
          <Link href="/school"><a>Школа</a></Link>
        </li>
        <li className={st.menuItem}>
          <Link href="/team"><a>Команда</a></Link>
        </li>
        <li className={st.menuItem}>
          <Link href="/price"><a>Цены</a></Link>
        </li>
        <li className={st.menuItem}>
          <Link href="/contacts"><a>Контакты</a></Link>
        </li>
      </ul>

      <div className={st.contacts}>8 (812) 994 54 97</div>
    </nav>
  </div>
)
