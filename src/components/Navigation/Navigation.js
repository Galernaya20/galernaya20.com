//@flow

import React from 'react'
import styled from 'styled-components'

export type PropsT = {
  navigation: Array<{
    title: string,
    link: string,
  }>,
}

const List = styled.ul`
  margin: 0;
  padding: 0;
`
const Item = styled.li`
  list-style-type: none;
`
const Link = styled.a`
  color: #000;
`

export const Navigation = ({navigation}: PropsT) => {
  return (
    <List>
      {navigation.map((item, index) => (
        <Item key={index}>
          <Link href={item.link} target="_blank">
            {item.title}
          </Link>
        </Item>
      ))}
    </List>
  )
}
