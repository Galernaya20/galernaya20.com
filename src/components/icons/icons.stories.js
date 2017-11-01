//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {HamburgerIcon} from './HamburgerIcon'
import {CloseIcon} from './CloseIcon'

storiesOf('Icons', module)
  .add('Hamburger', () => <HamburgerIcon />)
  .add('Close', () => <CloseIcon />)
