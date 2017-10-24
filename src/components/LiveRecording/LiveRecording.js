// @flow

import React from 'react'
import st from './LiveRecording.module.css'

const videoSize = {
  width: 400,
  height: 250,
}

const LiveRecording = () => (
  <div className={st.container}>
    <h2>Запись live</h2>
    <p>
      Мы можем записать как вы записываетесь <br />И прочие интересные моменты этой части
    </p>
    <p>Стоимость от 600 руб.</p>
    <div className={st.videoContainer}>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FUtrw7GtdfM"
          frameBorder="0"
          allowFullscreen
          {...videoSize}
        />
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DcJFdCmN98s"
          frameBorder="0"
          allowFullscreen
          {...videoSize}
        />
      </div>
    </div>
  </div>
)

export default LiveRecording
