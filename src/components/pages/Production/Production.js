//@flow

import React from 'react'
import {Header} from '../../Header/Header'
import type {PropsT as HeaderT} from '../../Header/Header'
import type {PropsT as LogosT} from '../../ClientLogos/ClientLogos'
import type {PropsT as ReviewsT} from '../../Reviews/Reviews'
import {Footer} from '../../Footer/Footer'
import {ClientLogos} from '../../ClientLogos/ClientLogos'
import {TwoColumnRow} from '../../TwoColumnRow/TwoColumnRow'
import {BlockLayout, Description} from '../styles'
import {Reviews} from '../../Reviews/Reviews'

import {SoundCloud} from '../../SoundCloud/SoundCloud'
import {ContentWithVideos} from '../../ContentWithVideos/ContentWithVideos'

type InfoWithPriceT = {
  title: string,
  description: {
    description: string,
  },
  price: number,
  link: string,
}

type ProductionT = {
  header: HeaderT,
  arrangement: InfoWithPriceT,
  consolidation: InfoWithPriceT,
  studioRental: {
    title: string,
    description: {description: string},
    price: number,
    videoLeft: string,
    videoRight: string,
  },
  soundCloud: Array<{
    iframe: {
      iframe: string,
    },
  }>,
} & ReviewsT &
  LogosT

export const Production = ({
  header,
  logos,
  arrangement,
  consolidation,
  soundCloud,
  studioRental,
  reviews,
}: ProductionT) => (
  <div>
    <Header {...header} />

    <TwoColumnRow
      left={
        <BlockLayout>
          <h2>{arrangement.title}</h2>
          <p>{arrangement.description.description}</p>
          <p>Стоимость от {arrangement.price} в час</p>
          <p>
            <a href={arrangement.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
      right={
        <BlockLayout>
          <SoundCloud content={soundCloud[0].iframe.iframe} />
        </BlockLayout>
      }
    />
    <TwoColumnRow
      invert
      left={
        <BlockLayout>
          <SoundCloud content={soundCloud[1].iframe.iframe} />
        </BlockLayout>
      }
      right={
        <BlockLayout>
          <h2>{consolidation.title}</h2>
          <p>{consolidation.description.description}</p>
          <p>Стоимость от {consolidation.price} в час</p>
          <p>
            <a href={consolidation.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
    />
    <ClientLogos logos={logos} />
    <BlockLayout>
      <ContentWithVideos videoLeft={studioRental.videoLeft} videoRight={studioRental.videoRight}>
        <h2>{studioRental.title}</h2>
        <Description>{studioRental.description.description}</Description>
        <p>Стоимость от {studioRental.price} руб.</p>
      </ContentWithVideos>
    </BlockLayout>
    <div>
      <Reviews reviews={reviews} />
    </div>
    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <Production {...pathContext} />
}

export default UnwrapPathContext
