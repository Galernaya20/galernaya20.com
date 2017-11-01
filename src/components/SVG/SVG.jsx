import React from 'react'
import cn from 'classnames'
import st from './SVG.pcss'

export const SVG = ({children, width, height, className}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    className={cn(st.svg, className)}
    role="presentation">
    {children}
  </svg>
)
