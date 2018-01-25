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
  width: 100%;
  height: 150px;
  @media screen and (min-width: 576px) {
    height: 350px;
  }

  @media screen and (min-width: 768px) {
    height: 350px;
  }

  @media screen and (min-width: 992px) {
    height: 450px;
  }
`

export type PropsT = {
  title: string,
  description: {description: string},
  media?: {src: {src: string}},
}

export const Header = ({title, description, media}: PropsT) => (
  <Self>
    <Content>
      <StyledHeader>{title}</StyledHeader>
      <Description>{description.description}</Description>
      {media && (
        <VideoWrapper>
          <Video>
            <Iframe src={media.src.src} frameBorder="0" allowFullscreen />
          </Video>
        </VideoWrapper>
      )}
    </Content>
  </Self>
)
