import React from 'react'
import {storiesOf} from '@storybook/react'

import LiveRecording from '../src/components/LiveRecording'

storiesOf('Page/LiveRecording', module).add('standart', () => (
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
))
