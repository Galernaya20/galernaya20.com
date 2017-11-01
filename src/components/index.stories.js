//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../stories/decorators'

import LiveRecording from './LiveRecording'
import {Header} from './Header/Header'
import {NavBar} from './NavBar/NavBar'

storiesOf('MainPage', module)
  .addDecorator(
    contextDecorator({
      router: {
        history: {
          isActive: () => false,
          location: {pathname: '', query: {auth: false}},
          createHref: id => id,
        },
      },
    }),
  )
  .add('simple', () => (
    <div>
      <NavBar />
      <Header
        title="Студия звукозаписи"
        description="Коротко о том, что это и какие услуги и для кого"
        src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
      />

      <LiveRecording
        header="Запись live"
        explanation={
          <span>
            Мы можем записать как вы записываетесь <br />И прочие интересные моменты этой части
          </span>
        }
        cost="Стоимость от 600 руб."
        videoIds={['FUtrw7GtdfM', 'DcJFdCmN98s']}
      />
    </div>
  ))
