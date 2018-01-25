//@flow

import React from 'react'
import styled from 'styled-components'

const Self = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #353535;
  flex-wrap: wrap;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
`

const LogoImg = styled.img`
  width: auto;
  max-height: 100%;
`

export const ClientLogos = () => {
  return (
    <Self>
      <Logo>
        <LogoImg src="https://placehold.it/150x50" />
      </Logo>
      <Logo>
        <LogoImg src="https://placehold.it/150x70" />
      </Logo>
      <Logo>
        <LogoImg src="https://placehold.it/150x30" />
      </Logo>
      <Logo>
        <LogoImg src="https://placehold.it/150x80" />
      </Logo>
      <Logo>
        <LogoImg src="https://placehold.it/150x50" />
      </Logo>
    </Self>
  )
}
