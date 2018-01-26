//@flow

import React from 'react'
import styled from 'styled-components'
import {Container} from '../Container/Container'

import {FacebookIcon} from './FacebookIcon'
import {InstagramIcon} from './InstagramIcon'
import {TwitterIcon} from './TwitterIcon'
import {VimeoIcon} from './VimeoIcon'
import {VkIcon} from './VkIcon'
import {WhatsappIcon} from './WhatsappIcon'
import {YoutubeIcon} from './YoutubeIcon'

const Row = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 200px;
`

export const Footer = () => (
  <Container style={{backgroundColor: '#eee'}}>
    <Content>
      <Row>Чтобы сделать заказ, свяжитесь с нами любым удобным способом.</Row>
      <Row>
        <div>
          <div>8 (812) 994 54 97</div>
          <div>
            <FacebookIcon width={20} height={20} viewBox={'0 0 60 60'} />
            <InstagramIcon width={20} height={20} viewBox={'0 0 60 60'} />
            <TwitterIcon width={20} height={20} viewBox={'0 0 60 60'} />
            <VimeoIcon width={20} height={20} viewBox={'0 0 60 60'} />
            <VkIcon width={20} height={20} viewBox={'0 0 60 60'} />
            <WhatsappIcon width={20} height={20} viewBox={'0 0 60 60'} />
            <YoutubeIcon width={20} height={20} viewBox={'0 0 60 60'} />
          </div>
        </div>
      </Row>
    </Content>
  </Container>
)
