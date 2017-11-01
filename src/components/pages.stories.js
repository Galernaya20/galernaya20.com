//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../stories/decorators'

import {ContentWithVideos} from './ContentWithVideos/ContentWithVideos'
import {Header} from './Header/Header'
import {Content} from './Content/Content'
import {NavBar} from './NavBar/NavBar'

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

      <ContentWithVideos
        header="Запись live"
        explanation={
          <span>
            Мы можем записать как вы записываетесь <br />И прочие интересные моменты этой части
          </span>
        }
        cost="Стоимость от 600 руб."
        videoIds={['FUtrw7GtdfM', 'DcJFdCmN98s']}
      />

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
