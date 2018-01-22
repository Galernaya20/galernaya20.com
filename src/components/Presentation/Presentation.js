//@flow

import React from 'react'
import styled from 'styled-components'

const Self = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;

  @media (max-width: 999px) {
    min-height: 300px;
  }
`

export const Presentation = ({
  children,
  background = {color: 'grey'},
}: {
  children?: *,
  background?: {color?: string, image?: string},
}) => (
  <Self
    style={{
      backgroundColor: background.color,
      backgroundImage: background.image ? `url(${background.image})` : null,
    }}
  >
    {children}
  </Self>
)
