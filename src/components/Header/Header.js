//@flow

import React from 'react'
import cn from 'classnames'
import {Content} from '../index'
import st from './Header.module.css'

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
  <Content className={cn(st.self, className)}>
    <h2 className={st.header}>{title}</h2>
    <p className={st.description}>{description}</p>
    {src && (
      <div className={st.videoWrapper}>
        <div className={st.video}>
          <Player className={st.player} poster="/assets/poster.png">
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
          </Player>
        </div>
      </div>
    )}
  </Content>
)
