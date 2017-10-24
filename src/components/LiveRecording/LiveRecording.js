// @flow

import React from 'react'
import st from './LiveRecording.module.css'

const LiveRecording = () => (
  <div className={st.container}>
    <h2>Запись live</h2>
    <p>
      Мы можем записать как вы записываетесь <br />И прочие интересные моменты этой части
    </p>
    <p>Стоимость от 600 руб.</p>
    <div>
      <span>Хоба! Видео 1</span>
      <span>Хоба! Видео 2</span>
    </div>
  </div>
)

export default LiveRecording
