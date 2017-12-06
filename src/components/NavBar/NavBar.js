//@flow
import React, {Component} from 'react'
import st from './NavBar.module.css'
import cn from 'classnames'
import Link from 'gatsby-link'
import {HamburgerIcon} from '../icons/HamburgerIcon'
import ClickOutside from 'react-click-outside'

export class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize() {
    if (window.innerWidth >= 1000 && this.state.isOpen) {
      this.closeMenu()
    }
  }

  toggleMenu() {
    this.setState({isOpen: !this.state.isOpen})
  }

  closeMenu() {
    this.setState({isOpen: false})
  }

  render() {
    return (
      <div className={st.header}>
        <nav className={st.wrapper}>
          <ClickOutside className={st.menu} onClickOutside={this.closeMenu}>
            <div className={st.hamburger} onClick={this.toggleMenu}>
              <HamburgerIcon className={st.hamburgerIcon} />
            </div>

            <ul className={cn(st.menuList, this.state.isOpen ? st.open : '')}>
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
          </ClickOutside>

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
  }
}
