//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../../../stories/decorators'
import {NavBar} from '../../NavBar/NavBar'

import {InTheBox} from './InTheBox'
import InTheBoxData from './fixture'

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
  .add('InTheBox', () => (
    <div>
      <NavBar />
      <InTheBox {...InTheBoxData} />
    </div>
  ))
