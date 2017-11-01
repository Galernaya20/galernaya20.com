//@flow

import React from 'react'
import cn from 'classnames'
import st from './Content.module.css'

export const Content = ({children, className}: {children: *, className: string}) => (
  <div className={cn(st.self, className)}>{children}</div>
)
