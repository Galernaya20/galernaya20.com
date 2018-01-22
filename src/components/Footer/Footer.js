//@flow

import React from 'react'
import styled from 'styled-components'

import {Content} from '../Content/Content'
import {Presentation} from '../Presentation/Presentation'
import {FacebookIcon} from './FacebookIcon'
import {InstagramIcon} from './InstagramIcon'
import {TwitterIcon} from './TwitterIcon'
import {VimeoIcon} from './VimeoIcon'
import {VkIcon} from './VkIcon'
import {WhatsappIcon} from './WhatsappIcon'
import {YoutubeIcon} from './YoutubeIcon'

const StyledContent = styled(Content)`
  min-height: 200px;
`

const Row = styled.p`
  display: flex;
`

export const Footer = () => (
  <StyledContent
    centered
    presentation={
      <div>
        <p>8 (812) 994 54 97</p>
        <Row>
          <FacebookIcon width={20} height={20} viewBox={'0 0 60 60'} />
          <InstagramIcon width={20} height={20} viewBox={'0 0 60 60'} />
          <TwitterIcon width={20} height={20} viewBox={'0 0 60 60'} />
          <VimeoIcon width={20} height={20} viewBox={'0 0 60 60'} />
          <VkIcon width={20} height={20} viewBox={'0 0 60 60'} />
          <WhatsappIcon width={20} height={20} viewBox={'0 0 60 60'} />
          <YoutubeIcon width={20} height={20} viewBox={'0 0 60 60'} />
        </Row>
      </div>
    }
  >
    <Presentation background={{color: 'transparent'}}>
      Чтобы сделать заказ, свяжитесь с нами любым удобным способом.
    </Presentation>
  </StyledContent>
)
