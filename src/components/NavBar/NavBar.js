//@flow
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
`

const Menu = styled.ul`
  display: flex;
  flex-grow: 1;
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
  align-items: center;
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
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: auto;
`

const Header = styled.div`
  background: #fff;
  color: #333;
  height: 65px;
  border-bottom: 1px solid #aaa;
`

export const NavBar = () => (
  <Header>
    <WrapperNav>
      <StyledLink to="/">
        <LogoImg
          src="http://via.placeholder.com/150x50"
          alt="Galernaya 20 - студия звукозаписи, аренда оборудования, продюсерский центр, аранжировка песен"
        />
      </StyledLink>

      <Menu>
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
      </Menu>

      <Contacts>8 (812) 994 54 97</Contacts>
    </WrapperNav>
  </Header>
)
