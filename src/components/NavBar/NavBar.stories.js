//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {NavBar} from './NavBar.js'
import {contextDecorator} from '../../../stories/decorators'

storiesOf('NavBar', module)
  .addDecorator(
    contextDecorator({
      router: {
        history: {
          push: () => {},
          replace: () => {},
          isActive: () => false,
          location: {pathname: '', query: {auth: false}},
          createHref: id => id,
        },
      },
    }),
  )
  .add('NavBar', () => <NavBar />)
