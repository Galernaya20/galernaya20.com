//@flow

import React from 'react'
import cn from 'classnames'
import {Content} from '../index'
import st from './Header.module.css'

export const Header = ({
  title,
  description,
  src,
  className,
}: {
  title: string,
  description: string,
  src?: string,
  className?: string,
}) => (
  <Content className={cn(st.self, className)}>
    <h2 className={st.header}>{title}</h2>
    <p className={st.description}>{description}</p>
  </Content>
)
