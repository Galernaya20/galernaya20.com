//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../stories/decorators'

import {ContentWithVideos} from '../components/ContentWithVideos'
import {Header} from '../components/Header/Header'
import {Content} from '../components/Content/Content'
import {NavBar} from '../components/NavBar/NavBar'
import {ClientLogos} from '../components/ClientLogos/ClientLogos'

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

      <Content presentation={<div>I’m presentation</div>}>
        <h2>Heading 2</h2>
        <p>
          This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
          until it does wrap.
        </p>
      </Content>

      <ContentWithVideos videoIds={['FUtrw7GtdfM', 'DcJFdCmN98s']}>
        <h2>Запись live</h2>
        <p>
          Мы можем записать как вы записываетесь <br />И прочие интересные моменты этой части
        </p>
        <p>Стоимость от 600 руб.</p>
      </ContentWithVideos>

      <ClientLogos />

      <Content presentation={<div>I’m presentation</div>} inverted>
        <h2>Heading 2</h2>
        <p>
          This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
          until it does wrap.
        </p>
      </Content>
      <Content presentation={<div>I’m presentation</div>}>
        <h2>Heading 2</h2>
        <p>
          This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
          until it does wrap.
        </p>
      </Content>
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
