import React from 'react'
import cn from 'classnames'
import {Content} from '../index'
import st from './Header.module.css'

export const Header = ({children, className}) => <Content className={cn(st.self, className)}>{children}</Content>
