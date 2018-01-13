//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../stories/decorators'

import {ContentWithVideos} from './ContentWithVideos/ContentWithVideos'
import {Header} from './Header/Header'
import {Content} from './Content/Content'
import {NavBar} from './NavBar/NavBar'
import {ClientLogos} from './ClientLogos/ClientLogos'

const TwoColumnRow = ({left, right, invert, style = {}}: {left: any, right: any, invert?: boolean, style?: Object}) => {
  return (
    <Content
      centered
      presentation={<Content style={invert ? style : {...style, backgroundColor: '#ddd'}}>{right}</Content>}>
      <Content style={invert ? {...style, backgroundColor: '#ddd'} : style}>{left}</Content>
    </Content>
  )
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
      <Header
        title="Студия звукозаписи"
        description="Коротко о том, что это и какие услуги и для кого"
        src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
      />

      <TwoColumnRow
        style={{height: 260}}
        left={
          <div>
            <h2>Студия А</h2>
            <p>
              Подходит для записи вокала записи одного интрумента. Можно делать такие-то вещи, со своим звуковиком и
              без.
            </p>
            <p>Стоимость от 600руб в час</p>
            <p> Подробности &gt;</p>
          </div>
        }
        right={
          <div>
            <h2>Студия Б</h2>
            <p>
              Подходит для записи вокала записи одного интрумента. Можно делать такие-то вещи, со своим звуковиком и
              без.
            </p>
            <p>Стоимость от 800руб в час</p>
            <p> Подробности &gt;</p>
          </div>
        }
      />

      <ContentWithVideos videoIds={['FUtrw7GtdfM', 'DcJFdCmN98s']}>
        <h2>Запись live</h2>
        <p>
          Мы можем записать как вы записываетесь <br />И прочие интересные моменты этой части
        </p>
        <p>Стоимость от 600 руб.</p>
      </ContentWithVideos>

      <ClientLogos />

      <TwoColumnRow
        style={{height: 260}}
        left={
          <div>
            <h2>Запись вокала</h2>
            <p>Что-то про особенности записи вокала. Для кого, для скольки людей и тп</p>
            <p>Вам подойдет студия А или Студия Б</p>
            <p>Стоимость от 600руб</p>
            <p>Подробности</p>
          </div>
        }
        right={<div>123</div>}
      />

      <TwoColumnRow
        style={{height: 260}}
        invert
        left={<div>123</div>}
        right={
          <div>
            <h2>Запись инструментов</h2>
            <p>Что-то про особенности записи вокала. Для кого, для скольки людей и тп</p>
            <p>Вам подойдет студия А или Студия Б</p>
            <p>Стоимость от 600руб</p>
            <p>Подробности</p>
          </div>
        }
      />
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
