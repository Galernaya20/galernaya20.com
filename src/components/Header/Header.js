//@flow

import React from 'react'
import {Content} from '../index'

import styled from 'styled-components'

const Video = styled.div`
  width: 300px;
  height: 200px;

  @media screen and (min-width: 576px) {
    width: 500px;
    height: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 400px;
  }

  @media screen and (min-width: 992px) {
    width: 840px;
    height: 555px;
  }
`

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Description = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
`

const StyledHeader = styled.h2`
  margin-top: 30px;
  margin-bottom: 0;
`

const Self = styled.div`
  background: #353535;
  color: #fff;
  text-align: center;
`

const Iframe = styled.iframe`
  width: 500px;
  height: 300px;
`

export const Header = ({title, description, src}: {title: string, description: string, src?: string}) => (
  <Self>
    <Content>
      <StyledHeader>{title}</StyledHeader>
      <Description>{description}</Description>
      {src && (
        <VideoWrapper>
          <Video>
            <Iframe src={'https://www.youtube.com/embed/FUtrw7GtdfM'} frameBorder="0" allowFullscreen />
          </Video>
        </VideoWrapper>
      )}
    </Content>
  </Self>
)
