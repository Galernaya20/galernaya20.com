//@flow

import React from 'react'
import st from './Presentation.module.css'

export const Presentation = ({
  children,
  background = {color: 'grey'},
}: {
  children?: *,
  background?: {color?: string, image?: string},
}) => (
  <div
    className={st.self}
    style={{
      backgroundColor: background.color,
      backgroundImage: background.image ? `url(${background.image})` : null,
    }}>
    {children}
  </div>
)
