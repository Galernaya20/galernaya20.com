//@flow

import React from 'react'
import styled from 'styled-components'

const Self = styled.div`
  flex-wrap: wrap;
  display: flex;
`

const Col = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({invert}) => {
    if (invert) {
      return `
      @media screen and (max-width: 992px) {
        order:1
      }
      background-color: #ddd;
      `
    }
    return `
    @media screen and (max-width: 992px) {
      order:0
    }`
  }};
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`

export const TwoColumnRow = ({left, right, invert}: {left: any, right: any, invert?: boolean}) => {
  return (
    <Self>
      <Col invert={invert}>{left}</Col>
      <Col invert={!invert}>{right}</Col>
    </Self>
  )
}
