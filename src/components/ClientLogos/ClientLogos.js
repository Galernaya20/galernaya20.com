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
  max-width: 100%;
  width: auto;
  max-height: 100px;
`
export type PropsT = {
  logos: Array<{
    title: string,
    image: {
      file: {
        url: string,
      },
    },
  }>,
}

export const ClientLogos = ({logos}: PropsT) => {
  return (
    <Self>
      {logos.map((item, index) => (
        <Logo key={index}>
          <LogoImg src={item.image.file.url} />
        </Logo>
      ))}
    </Self>
  )
}
