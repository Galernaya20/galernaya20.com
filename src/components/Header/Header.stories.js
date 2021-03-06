//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {Header} from './Header.js'

storiesOf('Header', module)
  .add('withVideo', () => (
    <Header
      title="Студия звукозаписи"
      description={{description: 'Коротко о том, что это и какие услуги и для кого'}}
      media={{src: {src: 'https://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'}}}
    />
  ))
  .add('noVideo', () => (
    <Header
      title="Студия звукозаписи"
      description={{description: 'Коротко о том, что это и какие услуги и для кого'}}
    />
  ))
