//@flow

import React from 'react'
import cn from 'classnames'
import {Content} from '../index'
import st from './ClientLogos.module.css'

export const ClientLogos = ({className}: {className?: string}) => <Content className={cn(st.self, className)} />
