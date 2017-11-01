//@flow

import React from 'react'
import cn from 'classnames'
import {Content} from '../index'
import st from './Header.module.css'

export const Header = ({children, className}: {children?: *, className?: string}) => (
  <Content className={cn(st.self, className)}>{children}</Content>
)
