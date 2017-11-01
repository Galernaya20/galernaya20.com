//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {TestPage} from '../../../.storybook/TestPage'
import {Content} from './Content'

storiesOf('Content', module)
  .add('default', () => (
    <Content>
      <h2>Heading 2</h2>
      <p>
        This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
        until it does wrap.
      </p>
    </Content>
  ))
  .add('default & centered', () => (
    <Content centered>
      <h2>Heading 2</h2>
      <p>
        This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
        until it does wrap.
      </p>
    </Content>
  ))
  .add('has presentation', () => (
    <div>
      <Content presentation={<div>I’m presentation</div>}>
        <h2>Heading 2</h2>
        <p>
          This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
          until it does wrap.
        </p>
      </Content>
      <Content presentation={<div>I’m inverted presentation</div>} inverted>
        <h2>Heading 2</h2>
        <p>
          This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again
          until it does wrap.
        </p>
      </Content>
    </div>
  ))
  .add('typography', () => (
    <Content>
      <TestPage />
    </Content>
  ))
