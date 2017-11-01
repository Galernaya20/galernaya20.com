// @flow

import React from 'react'
import {Content} from '../index'
import st from './LiveRecording.module.css'

const videoSize = {
  width: 400,
  height: 250,
}

const LiveRecording = ({
  header,
  explanation,
  cost,
  videoIds,
}: {
  header: React.ReactElement<*>[],
  explanation: React.ReactElement<*>[],
  cost: React.ReactElement<*>[],
  videoIds: string[],
}) => (
  <Content className={st.container}>
    <h2>{header}</h2>
    <p>{explanation}</p>
    <p>{cost}</p>
    <div className={st.videoContainer}>
      {videoIds.map(videoId => (
        <div className={st.video} key={videoId}>
          <iframe src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullscreen {...videoSize} />
        </div>
      ))}
    </div>
  </Content>
)

export default LiveRecording