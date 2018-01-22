//@flow
import React from 'react'
import {Content} from '../Content/Content'

export const TwoColumnRow = ({
  left,
  right,
  invert,
  style = {height: 300, width: '100%'},
}: {
  left: any,
  right: any,
  invert?: boolean,
  style?: Object,
}) => {
  const invertStyle = {...style, backgroundColor: '#ddd'}
  return (
    <Content centered presentation={<Content style={invert ? style : invertStyle}>{right}</Content>}>
      <Content style={invert ? invertStyle : style}>{left}</Content>
    </Content>
  )
}
