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
const TwoColumnRow = ({left, right, invert, style = {}}: {left: any, right: any, invert?: boolean, style?: Object}) => {
  return (
    <Content
      centered
      presentation={<Content style={invert ? style : {...style, backgroundColor: '#ddd'}}>{right}</Content>}>
      <Content style={invert ? {...style, backgroundColor: '#ddd'} : style}>{left}</Content>
    </Content>
  )
}
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
  .add('education', () => (
    <div>
      <NavBar />
      <Header title="Образовательные программы" description="Курсы лекций про саунд, продюссирование и запись музыки" />
      <Content presentation={<div>I’m presentation</div>}>
        <h2>Самопродюссирование</h2>
        <p>
          This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
          until it does wrap.
        </p>
        <p>
          <strong>Стоимость от 600 руб.</strong>
        </p>
        <p>
          <a href="#">Подробности</a>
        </p>
      </Content>

      <Content presentation={<div>I’m presentation</div>} inverted>
        <h2>Запись и сведение</h2>
        <p>
          This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
          until it does wrap.
        </p>
        <p>
          <strong>Стоимость от 600 руб.</strong>
        </p>
        <p>
          <a href="#">Подробности</a>
        </p>
      </Content>

      <Content presentation={<div>I’m presentation</div>}>
        <h2>Диджеинг</h2>
        <p>
          This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
          until it does wrap.
        </p>
        <p>
          <strong>Стоимость от 600 руб.</strong>
        </p>
        <p>
          <a href="#">Подробности</a>
        </p>
      </Content>
    </div>
  ))
