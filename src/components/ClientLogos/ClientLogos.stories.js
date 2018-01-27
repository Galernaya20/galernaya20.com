//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {ClientLogos} from './ClientLogos.js'
import studioData from '../pages/Studio/fixture'

const {logos} = studioData

storiesOf('ClientLogos', module).add('ClientLogos', () => <ClientLogos logos={logos} />)
