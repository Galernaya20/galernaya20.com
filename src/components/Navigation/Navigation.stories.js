//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {Navigation} from './Navigation.js'
import studioData from '../pages/Studio/fixture'

const {navigation} = studioData

storiesOf('Navigation', module).add('navigation', () => <Navigation navigation={navigation} />)
