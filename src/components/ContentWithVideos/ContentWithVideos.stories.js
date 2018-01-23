//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'

import {ContentWithVideos} from './ContentWithVideos'

storiesOf('ContentWithVideos', module).add('standart', () => (
  <ContentWithVideos videoIds={['FUtrw7GtdfM', 'DcJFdCmN98s']}>
    <h2>Запись live</h2>
    <p>
      Мы можем записать как вы записываетесь <br />И прочие интересные моменты этой части
    </p>
    <p>Стоимость от 600 руб.</p>
  </ContentWithVideos>
))
