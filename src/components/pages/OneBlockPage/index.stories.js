//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../../../stories/decorators'
import {NavBar} from '../../NavBar/NavBar'

import {OneBlockPage} from './OneBlockPage'
import oneBlockPageData from './fixture'

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
  .add('OneBlockPage', () => (
    <div>
      <NavBar />
      <OneBlockPage {...oneBlockPageData} />
    </div>
  ))
