//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {Reviews} from './Reviews'
import fixture from '../pages/Studio/fixture'
const oneReview = [fixture.review[0]]

storiesOf('Reviews', module)
  .add('one review', () => <Reviews review={oneReview} />)
  .add('many reviews', () => <Reviews review={fixture.review} />)
