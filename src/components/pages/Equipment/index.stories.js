//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../../../stories/decorators'
import {NavBar} from '../../NavBar/NavBar'

import {Equipment} from './Equipment'
import equipmentData from './fixture'

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
  .add('Equipment', () => (
    <div>
      <NavBar />
      <Equipment {...equipmentData} />
    </div>
  ))
