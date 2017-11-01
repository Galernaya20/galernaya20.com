//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {Reviews} from './Reviews'

storiesOf('Reviews', module)
  .add('one review', () => (
    <Reviews
      reviews={[
        {
          text:
            'Suspendisse suscipit, tortor sed tincidunt molestie, justo arcu consequat lorem, non mattis lorem magna eu odio.',
          author: 'Ivan Tooloop',
          photo: 'https://ucarecdn.com/5b802641-cd9d-4a10-adf1-3dffa9709e29/akurganowsquare.jpg',
        },
      ]}
    />
  ))
  .add('many reviews', () => (
    <Reviews
      reviews={[
        {
          text:
            'Suspendisse suscipit, tortor sed tincidunt molestie, justo arcu consequat lorem, non mattis lorem magna eu odio. Proin vulputate volutpat ultrices.',
          author: 'Ivan Tooloop',
          photo: 'https://ucarecdn.com/5b802641-cd9d-4a10-adf1-3dffa9709e29/akurganowsquare.jpg',
        },
        {
          text:
            'Vestibulum erat ex, dictum et dapibus sed, tempor sit amet mi. Sed rutrum enim eget feugiat posuere. Donec at sodales erat.',
          author: 'Alex Kurganov',
          photo: 'https://ucarecdn.com/5b802641-cd9d-4a10-adf1-3dffa9709e29/akurganowsquare.jpg',
        },
        {
          text:
            'Fusce a augue id sapien porta pretium eu vitae est. In vitae cursus nulla. Vivamus semper, lectus at faucibus luctus, elit neque auctor erat, nec varius lacus augue id nunc.',
          author: 'Batman',
          photo: 'https://ucarecdn.com/5b802641-cd9d-4a10-adf1-3dffa9709e29/akurganowsquare.jpg',
        },
      ]}
    />
  ))
