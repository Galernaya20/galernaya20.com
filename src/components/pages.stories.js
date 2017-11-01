//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../stories/decorators'

import {ContentWithVideos} from './ContentWithVideos/ContentWithVideos'
import {Header} from './Header/Header'
import {Content} from './Content/Content'
import {NavBar} from './NavBar/NavBar'
import {ClientLogos} from './ClientLogos/ClientLogos'

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
