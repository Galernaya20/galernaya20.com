//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {Navigation} from './Navigation.js'
import studioData from '../pages/Studio/fixture'

const {navigations} = studioData

storiesOf('Navigation', module).add('navigation', () => <Navigation navigations={navigations} />)
