//@flow

import React from 'react'
import styled from 'styled-components'

const Self = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 calc(60px - 32px);

  @media (max-width: 700px) {
    padding: 40px 0 calc(40px - 24px);
  }

  @media (min-width: 1250px) {
    padding: 80px 0 calc(80px - 32px);
  }

  ${({centered}) => {
    if (centered) {
      return `
        text-align: center;
        justify-content: center;
      `
    }
  }};

  ${({presentation}) => {
    if (presentation) {
      return `
      @media (min-width: 1000px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 0;
      }
      `
    }
  }};
`

const Presentation = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-shrink: 1;
  box-sizing: border-box;
`

const Children = styled.div`
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 700px) {
    padding-left: 0px;
    padding-right: 0px;
    max-width: 600px;
  }
  @media (min-width: 1250px) {
    width: 800px;
  }

  @media (min-width: 1000px) {
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1250px) {
      padding: 0 10%;
    }
  }

  ${({inverted}) => {
    if (inverted) {
      return 'order: 1;'
    }
  }}
}
`
export const Content = ({
  children,
  style,
  centered,
  presentation,
  inverted,
}: {|
  children: *,
  style?: Object,
  centered?: boolean,
  presentation?: React$Element<any>,
  inverted?: boolean,
|}) => (
  <Self style={style} centered={centered} presentation={presentation}>
    <Children inverted={inverted}>{children}</Children>
    {presentation && <Presentation>{presentation}</Presentation>}
  </Self>
)
