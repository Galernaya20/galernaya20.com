//@flow

import React from 'react'
import cn from 'classnames'
import {Content} from '../index'

import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton,
} from 'video-react'
import 'video-react/dist/video-react.css'
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

const StyledPlayer = styled(Player)`
  &:global(.video-react) {
    height: 100% !important;
  }
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

export const Header = ({
  title,
  description,
  src,
  className,
}: {
  title: string,
  description: string,
  src?: string,
  className?: string,
}) => (
  <Self>
    <Content>
      <StyledHeader>{title}</StyledHeader>
      <Description>{description}</Description>
      {src && (
        <VideoWrapper>
          <Video>
            <StyledPlayer poster="/assets/poster.png">
              <source src={src} />

              <BigPlayButton position="center" />

              <ControlBar>
                <ReplayControl seconds={10} order={1.1} />
                <ForwardControl seconds={30} order={1.2} />
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                <VolumeMenuButton disabled />
              </ControlBar>
            </StyledPlayer>
          </Video>
        </VideoWrapper>
      )}
    </Content>
  </Self>
)
