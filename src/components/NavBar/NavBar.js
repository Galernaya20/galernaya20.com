//@flow
import React, {Component} from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {HamburgerIcon} from '../icons/HamburgerIcon'
import ClickOutside from 'react-click-outside'
import {Container} from '../Container/Container'

const MenuItem = styled.li`
  .menuItem {
    display: flex;
    align-items: center;
    margin: 0;
    height: 100%;
  }

  & a {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 100%;
    color: #333;
    text-decoration: none;
  }

  & a:hover {
    color: #aaa;
  }

  @media screen and (max-width: 1000px) {
    height: auto;
    width: 100%;
    min-height: 30px;
  }
`

const MenuClickOutside = styled(ClickOutside)`
  order: 1;
  @media screen and (max-width: 1000px) {
    order: 0;
  }
`

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  @media screen and (max-width: 1000px) {
    display: none;
    position: absolute;
    flex-direction: column;
    align-items: start;
    background: #eee;
    ${({open}) => {
      if (open) {
        return `display: block;`
      }
    }};
  }
`

const Contacts = styled.div`
  display: flex;
  order: 2;
  align-items: center;
  padding: 0 10px;
`

const LogoImg = styled.img`
  max-width: 100%;
`

const StyledLink = styled(Link)`
  width: 150px;
  display: flex;
  align-items: center;
  color: #333;
`

const WrapperNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

const Header = styled.div`
  background: #fff;
  color: #333;
  height: 65px;
  border-bottom: 1px solid #aaa;
`

const Hamburger = styled.div`
  display: none;
  height: 100%;
  width: 65px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #aaaaaa;

  &:hover {
    background: #eeeeee;
    color: #000;
  }
  @media screen and (max-width: 1000px) {
    display: flex;
  }
`

export class NavBar extends Component<{}, {isOpen: boolean}> {
  constructor(props: *) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    if (window.innerWidth >= 1000 && this.state.isOpen) {
      this.closeMenu()
    }
  }

  toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  closeMenu = () => {
    this.setState({isOpen: false})
  }

  render() {
    return (
      <Header>
        <Container>
          <WrapperNav>
            <MenuClickOutside onClickOutside={this.closeMenu}>
              <Hamburger onClick={this.toggleMenu}>
                <HamburgerIcon />
              </Hamburger>

              <MenuList open={this.state.isOpen}>
                <MenuItem>
                  <Link to="/">Студия</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/production">Продакшн</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/equipment">Оборудование</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/school">Школа</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/team">Команда</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/price">Цены</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/contacts">Контакты</Link>
                </MenuItem>
              </MenuList>
            </MenuClickOutside>

            <StyledLink to="/">
              <LogoImg
                src="http://via.placeholder.com/150x50"
                alt="Galernaya 20 - студия звукозаписи, аренда оборудования, продюсерский центр, аранжировка песен"
              />
            </StyledLink>

            <Contacts>8 (812) 994 54 97</Contacts>
          </WrapperNav>
        </Container>
      </Header>
    )
  }
}
