//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../stories/decorators'

import {ContentWithVideos} from './ContentWithVideos/ContentWithVideos'
import {Header} from './Header/Header'
import {Content} from './Content/Content'
import {NavBar} from './NavBar/NavBar'
import {ClientLogos} from './ClientLogos/ClientLogos'
import StudioPage from '../pages/studio'
import {TwoColumnRow} from './TwoColumnRow/TwoColumnRow'
import SchoolPage from '../pages/school'

export const studioData = {
  header: {
    title: 'Студия звукозаписи',
    description: 'Коротко о том, что это и какие услуги и для кого',
    src: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
  },
  studioA: {
    title: 'Студия А',
    description:
      'Подходит для записи вокала записи одного интрумента. Можно делать такие-то вещи, со своим звуковиком и без.',
    price: '600',
    link: 'http://galernaya20.com',
  },
  studioB: {
    title: 'Студия Б',
    description:
      'Подходит для записи вокала записи одного интрумента. Можно делать такие-то вещи, со своим звуковиком и без.',
    price: '800',
    link: 'http://galernaya20.com/',
  },
  liveRecord: {
    title: 'Запись live',
    description: 'Мы можем записать как вы записываетесь <br />И прочие интересные моменты этой части',
    price: '900',
    videos: ['FUtrw7GtdfM', 'DcJFdCmN98s'],
  },
  production: {
    title: 'Продакшн',
    description: 'Коротко о продакшене, кому и зачем',
    price: '390',
    link: 'http://galernaya20.com/',
  },
  vocalRecord: {
    title: 'Запись вокала',
    description:
      'Что-то про особенности записи вокала. Для кого, для скольки людей и тп   Вам подойдет студия А или Студия Б',
    price: '540',
    link: 'http://galernaya20.com/',
  },
  toolsRecording: {
    title: 'Запись инструментов',
    description:
      'Что-то про особенности записи вокала. Для кого, для скольки людей и тп   Вам подойдет студия А или Студия Б',
    price: '320',
    link: 'http://galernaya20.com/',
  },
}

export const schoolData = {
  header: {
    title: 'Образовательные программы',
    description: 'Курсы лекций про саунд, продюссирование и запись музыки',
  },
  selfProduction: {
    title: 'Самопродюссирование',
    description: 'Что-то про особенности записи инструментов. Для кого, для скольки людей и т.д.',
    price: '364',
    link: 'http://galernaya20.com/',
    src: 'http://via.placeholder.com/900x900',
  },
  recordingAndMixing: {
    title: 'Запись и сведение',
    description: 'Что-то про особенности записи инструментов. Для кого, для скольки людей и т.д.',
    price: '364',
    link: 'http://galernaya20.com/',
    src: 'http://via.placeholder.com/900x900',
  },
  dj: {
    title: 'Диджеинг',
    description: 'Что-то про особенности записи инструментов. Для кого, для скольки людей и т.д.',
    price: '549',
    link: 'http://galernaya20.com/',
    src: 'http://via.placeholder.com/900x900',
  },
}

storiesOf('Pages', module)
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
  .add('studio', () => (
    <div>
      <NavBar />
      <StudioPage {...studioData} />
    </div>
  ))
  .add('school', () => (
    <div>
      <NavBar />
      <SchoolPage {...schoolData} />
    </div>
  ))
