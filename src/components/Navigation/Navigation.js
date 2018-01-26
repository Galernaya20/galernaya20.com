//@flow

import React from 'react'
import styled from 'styled-components'

export type PropsT = {
  navigations: Array<{
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

export const Navigation = ({navigations}: PropsT) => {
  return (
    <List>
      {navigations.map((item, index) => (
        <Item key={index}>
          <Link href={item.link} target="_blank">
            {item.title}
          </Link>
        </Item>
      ))}
    </List>
  )
}
