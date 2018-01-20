//@flow
import React from 'react'
import styled from 'styled-components'

const Self = styled.svg`
  ${({currentColor}) => `fill: ${currentColor};`};
`

export const SVG = ({children, width, height}) => (
  <Self
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    role="presentation">
    {children}
  </Self>
)
