// @flow

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
`

const Video = styled.div`
  margin-right: 40px;
  &:last-of-type {
    margin-right: 0;
  }
`

const VideoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 50px;
`

const defaultVideoSize = {
  width: 400,
  height: 250,
}

export const ContentWithVideos = ({
  children,
  videoLeft,
  videoRight,
  videoSize = defaultVideoSize,
}: {
  children: React$Element<*>[],
  videoLeft: string,
  videoRight: string,
  videoSize?: {width: number, height: number},
}) => (
  <Container>
    {children}
    <VideoContainer>
      <Video>
        <iframe src={videoLeft} frameBorder="0" allowFullScreen {...videoSize} />
      </Video>
      <Video>
        <iframe src={videoRight} frameBorder="0" allowFullScreen {...videoSize} />
      </Video>
    </VideoContainer>
  </Container>
)
