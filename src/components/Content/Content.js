//@flow

import React from 'react'
import styled from 'styled-components'

const Self = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
  flex: 1;
  box-sizing: border-box;
`

const Children = styled.div`
  flex: 1;
  width: auto;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  className,
  centered,
  presentation,
  inverted,
}: {|
  children: *,
  style?: Object,
  className?: string,
  centered?: boolean,
  presentation?: React$Element<any>,
  inverted?: boolean,
|}) => (
  <Self className={className} style={style} centered={centered} presentation={presentation}>
    <Children inverted={inverted}>{children}</Children>
    {presentation && <Presentation>{presentation}</Presentation>}
  </Self>
)
