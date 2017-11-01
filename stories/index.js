//@flow
import './Reviews'

import React from 'react'
import {storiesOf} from '@storybook/react'
import {Reviews, Header} from '../src/components'

storiesOf('Header', module)
  .add('withVideo', () => (
    <Header
      title="Студия звукозаписи"
      description="Коротко о том, что это и какие услуги и для кого"
      src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
    />
  ))
  .add('noVideo', () => (
    <Header title="Студия звукозаписи" description="Коротко о том, что это и какие услуги и для кого" />
  ))
