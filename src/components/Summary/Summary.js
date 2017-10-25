//@flow

import React from 'react'

export const Summary = ({children, secondary, inverted = false}: any) => (
  <div>
    <div>{children}</div>
    <div>{secondary}</div>
  </div>
)
