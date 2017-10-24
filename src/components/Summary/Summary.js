import React from 'react'

export const Summary = ({children, secondary, inverted = false}) => (
  <div>
    <div>{children}</div>
    <div>{secondary}</div>
  </div>
)
