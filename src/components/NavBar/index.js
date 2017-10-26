import React from 'react'
import style from './style.module.css'
import Link from 'gatsby-link'

export const NavBar = () => (
  <div className={style.header}>
    <nav className={style.wrapper}>
      <Link to="/" className={style.logo}>
        <img
          src="http://galernaya20.com/wp-content/uploads/2015/06/Logo-Galernaya-201.png"
          alt="Galernaya 20 - студия звукозаписи, аренда оборудования, продюсерский центр, аранжировка песен"
          className={style.logoImg}
        />
      </Link>

      <ul className={style.menu}>
        <li className={style.menuItem}>
          <Link to="/">Студия</Link>
        </li>
        <li className={style.menuItem}>
          <Link to="/production">Продакшн</Link>
        </li>
        <li className={style.menuItem}>
          <Link to="/equipment">Оборудование</Link>
        </li>
        <li className={style.menuItem}>
          <Link to="/school">Школа</Link>
        </li>
        <li className={style.menuItem}>
          <Link to="/team">Команда</Link>
        </li>
        <li className={style.menuItem}>
          <Link to="/price">Цены</Link>
        </li>
        <li className={style.menuItem}>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>

      <div className={style.contacts}>8 (812) 994 54 97</div>
    </nav>
  </div>
)
