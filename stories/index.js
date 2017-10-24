import React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import {Button, Welcome} from '@storybook/react/demo'
import {Reviews} from '../src/components'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('Reviews', module).add('reviews', () => (
  <Reviews
    reviews={[
      {
        text:
          'Suspendisse suscipit, tortor sed tincidunt molestie, justo arcu consequat lorem, non mattis lorem magna eu odio. Proin vulputate volutpat ultrices. Donec et placerat diam. Sed feugiat, augue id varius bibendum, dui tortor ullamcorper orci, vel pulvinar nisl mauris quis ligula. Sed ultricies enim nec lacus tincidunt, quis sollicitudin ipsum pharetra. Proin vitae mollis tortor. Donec non mi vitae neque feugiat semper vitae quis odio. Donec semper ex quis massa porttitor, eget condimentum leo ullamcorper. Suspendisse potenti. Proin at purus elementum, tristique quam non, pharetra tortor. Cras scelerisque sem nisl, eget finibus dolor tincidunt a.',
        author: 'Ivan Tooloop',
        photo: 'https://ucarecdn.com/5b802641-cd9d-4a10-adf1-3dffa9709e29/akurganowsquare.jpg',
      },
      {
        text:
          'Vestibulum erat ex, dictum et dapibus sed, tempor sit amet mi. Sed rutrum enim eget feugiat posuere. Donec at sodales erat. Quisque ultricies posuere tortor, non laoreet metus dignissim vel. Suspendisse placerat consequat metus, dignissim vehicula velit. Integer vulputate nisl a tellus rhoncus, et rutrum justo auctor. Ut neque nisi, ultrices sit amet imperdiet nec, fermentum eget odio. Nullam mi dolor, cursus eget tellus ac, volutpat auctor urna. Morbi condimentum turpis nec massa aliquam, at eleifend nunc hendrerit. Ut sit amet ante mi. Phasellus vitae eros sagittis, dictum metus ut, molestie ante. Proin elementum molestie arcu ut hendrerit. Donec auctor, leo id imperdiet pulvinar, elit purus viverra libero, sed hendrerit arcu erat id odio. Vestibulum efficitur justo eu felis finibus volutpat. Mauris et magna tincidunt, viverra nisi non, lacinia massa. Pellentesque sollicitudin luctus scelerisque.',
        author: 'Alex Kurganov',
        photo: 'https://ucarecdn.com/5b802641-cd9d-4a10-adf1-3dffa9709e29/akurganowsquare.jpg',
      },
    ]}
  />
))
