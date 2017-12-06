//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {TestPage} from '../../../.storybook/TestPage'
import {Presentation} from '../Presentation/Presentation'

storiesOf('Presentation', module).add('default', () => (
  <Presentation>
    <h2>Heading 2</h2>
    <p>
      This is a paragraph of text that should be long enough to wrap. If not, we can repeat it over and over again until
      it does wrap.
    </p>
  </Presentation>
))
