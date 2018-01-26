//@flow

import React from 'react'
import styled from 'styled-components'

const Self = styled.div`
  width: 100%;
  height: 100%;
`
const SelfInner = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
`
//test ci
export const Container = ({children, className, style}: {children: *, style?: Object, className?: string}) => (
  <Self className={className} style={style}>
    <SelfInner>{children}</SelfInner>
  </Self>
)
