// @flow

import React from 'react'
import {Content} from '../index'
import st from './ContentWithVideos.module.css'

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
  <Content className={st.container} centered>
    {children}
    <div className={st.videoContainer}>
      {videoIds.map(videoId => (
        <div className={st.video} key={videoId}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullscreen
            {...defaultVideoSize}
            {...videoSize}
          />
        </div>
      ))}
    </div>
  </Content>
)
