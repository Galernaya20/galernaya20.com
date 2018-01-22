//@flow
import React from 'react'
import {storiesOf} from '@storybook/react'
import {Footer} from './Footer.js'
import {FacebookIcon} from './FacebookIcon'
import {InstagramIcon} from './InstagramIcon'
import {TwitterIcon} from './TwitterIcon'
import {VkIcon} from './VkIcon'
import {WhatsappIcon} from './WhatsappIcon'
import {YoutubeIcon} from './YoutubeIcon'

storiesOf('Footer', module)
  .add('FacebookIcon', () => <FacebookIcon />)
  .add('InstagramIcon', () => <InstagramIcon />)
  .add('TwitterIcon', () => <TwitterIcon />)
  .add('VkIcon', () => <VkIcon />)
  .add('WhatsappIcon', () => <WhatsappIcon />)
  .add('YoutubeIcon', () => <YoutubeIcon />)
  .add('simple', () => <Footer />)
