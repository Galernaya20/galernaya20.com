//@flow

import React from 'react'
import cn from 'classnames'
import st from './SVG.module.css'

export const SVG = ({
  children,
  width,
  height,
  viewBox,
  className,
}: {
  children?: any,
  width?: number,
  height?: number,
  viewBox?: string,
  className?: string,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox ? viewBox : width && height && `0 0 ${width} ${height}`}
    className={cn(st.svg, className)}
    role="presentation">
    {children}
  </svg>
)
