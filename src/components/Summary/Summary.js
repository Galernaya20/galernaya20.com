import React from 'react'
import cn from 'classnames'
import {Content} from '../index'
import st from './Summary.module.css'

export const Summary = ({children, className, secondary, inverted = false}) => (
  <Content className={cn(st.self, secondary && st.self_hasSecondary, className)}>
    <div className={st.main}>{children}</div>
    {secondary && <div className={st.secondary}>{secondary}</div>}
  </Content>
)
