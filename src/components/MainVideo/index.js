//@flow

import React from 'react'
import st from './index.module.css'
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from 'video-react'
import 'video-react/dist/video-react.css'

const MainVideo = () => (
  <div className={st.row}>
    <div className={st.col}>
      <h2 className={st.header}>Студия звукозаписи</h2>
      <p className={st.description}>Коротко о том, что это и какие услуги и для кого</p>
      <div className={st.videoWrapper}>
        <div className={st.video}>
          <Player className={st.player} poster="/assets/poster.png">
            <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
            <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

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
    </div>
  </div>
)

export default MainVideo
