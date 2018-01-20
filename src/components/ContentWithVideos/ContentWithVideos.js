// @flow

import React from 'react'
import {Content} from '../index'
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

const Presentation = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 50%;
  min-height: 500px;
  flex-shrink: 1;
  box-sizing: border-box;
`

const defaultVideoSize = {
  width: 400,
  height: 250,
}

export const ContentWithVideos = ({
  children,
  videoIds,
  videoSize,
}: {
  children: React$Element<*>[],
  videoIds: string[],
  videoSize?: {width: number, height: number},
}) => (
  <Content centered>
    <Container>
      {children}
      <VideoContainer>
        {videoIds.map(videoId => (
          <Video key={videoId}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullscreen
              {...defaultVideoSize}
              {...videoSize}
            />
          </Video>
        ))}
      </VideoContainer>
    </Container>
  </Content>
)
