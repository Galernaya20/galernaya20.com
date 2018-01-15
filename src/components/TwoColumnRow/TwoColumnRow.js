//@flow
import React from 'react'
import {Content} from '../Content/Content'

export const TwoColumnRow = ({
  left,
  right,
  invert,
  style = {},
}: {
  left: any,
  right: any,
  invert?: boolean,
  style?: Object,
}) => {
  return (
    <Content
      centered
      presentation={<Content style={invert ? style : {...style, backgroundColor: '#ddd'}}>{right}</Content>}>
      <Content style={invert ? {...style, backgroundColor: '#ddd'} : style}>{left}</Content>
    </Content>
  )
}
