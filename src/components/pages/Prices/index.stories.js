//@flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import {contextDecorator} from '../../../../stories/decorators'
import {NavBar} from '../../NavBar/NavBar'

import {Prices} from './Prices'
import pricesData from './fixture'

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
  .add('Prices', () => (
    <div>
      <NavBar />
      <Prices {...pricesData} />
    </div>
  ))
