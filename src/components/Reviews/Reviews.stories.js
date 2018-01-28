//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {Reviews} from './Reviews'
import fixture from '../pages/Studio/fixture'
const oneReview = [fixture.reviews[0]]

storiesOf('Reviews', module)
  .add('one review', () => <Reviews reviews={oneReview} />)
  .add('many reviews', () => <Reviews reviews={fixture.reviews} />)
