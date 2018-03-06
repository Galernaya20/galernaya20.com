//@flow

import React from 'react'

import {Header} from '../../Header/Header'
import {ClientLogos} from '../../ClientLogos/ClientLogos'
import {Reviews} from '../../Reviews/Reviews'
import {Footer} from '../../Footer/Footer'
import {TwoColumnRow} from '../../TwoColumnRow/TwoColumnRow'
import {Navigation} from '../../Navigation/Navigation'

import styled from 'styled-components'

import type {PropsT as HeaderT} from '../../Header/Header'
import type {PropsT as LogosT} from '../../ClientLogos/ClientLogos'
import type {PropsT as ReviewsT} from '../../Reviews/Reviews'
import type {PropsT as NavigationT} from '../../Navigation/Navigation'

import {BlockLayout, Layout} from '../styles'

const Description = styled.p`
  height: 159px;
  overflow: hidden;
  padding: 0;
`
const Img = styled.img`
  max-width: 100%;
  height: auto;
`
const PriceTitle = styled.h2`
  padding-top: 10px;
  text-align: center;
`
const PriceDescription = styled.div`
  white-space: pre-line;
`

type InfoWithPriceT = {
  title: string,
  description: {description: string},
  price: number,
  link: string,
}
type MediaT = {
  file: {
    url: string,
  },
}
type StudioAT = {
  header: HeaderT,
  info: {
    title: string,
    description: {
      description: string,
    },
  },
  infoMedia: MediaT,
  production: InfoWithPriceT,
  rentPrice: {
    title: string,
    description: {
      description: string,
    },
  },
} & ReviewsT &
  LogosT &
  NavigationT

export const StudioA = ({header, logos, reviews, production, navigation, info, infoMedia, rentPrice}: StudioAT) => (
  <div>
    <Header {...header} />
    <TwoColumnRow
      left={
        <BlockLayout>
          <h2>{info.title}</h2>
          <Description>{info.description.description}</Description>
        </BlockLayout>
      }
      right={
        <BlockLayout>
          <Img src={infoMedia.file.url} />
        </BlockLayout>
      }
    />
    <Layout>
      <PriceTitle>{rentPrice.title}</PriceTitle>
      <PriceDescription
        dangerouslySetInnerHTML={{
          __html: rentPrice.description.description,
        }}
      />
    </Layout>
    <TwoColumnRow
      left={
        <BlockLayout>
          <h2>{production.title}</h2>
          <Description>{production.description.description}</Description>
          <p>Стоимость от {production.price} в час</p>
          <p>
            <a href={production.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
      right={
        <BlockLayout>
          <Navigation navigation={navigation} />
        </BlockLayout>
      }
    />
    <ClientLogos logos={logos} />
    <div>
      <Reviews reviews={reviews} />
    </div>
    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <StudioA {...pathContext} />
}

export default UnwrapPathContext
