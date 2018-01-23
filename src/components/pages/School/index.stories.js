//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../../../stories/decorators'
import {NavBar} from '../../NavBar/NavBar'

import {School} from './School'
import schoolData from './fixture'

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
  .add('School', () => (
    <div>
      <NavBar />
      <School {...schoolData} />
    </div>
  ))
