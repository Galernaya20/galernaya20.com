import React from 'react'
import {Content} from '../index'

export const Summary = ({children, secondary, inverted = false}) => (
  <Content>
    <div>{children}</div>
    <div>{secondary}</div>
  </Content>
)
