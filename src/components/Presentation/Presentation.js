import React from 'react'

export const Presentation = ({children, background = {color: 'grey', image: null}}) => (
  <div
    style={{
      backgroundColor: background.color,
      backgroundImage: background.image ? `url(${background.image})` : null,
    }}>
    {children}
  </div>
)