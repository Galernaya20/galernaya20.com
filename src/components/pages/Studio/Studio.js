//@flow

import React from 'react'
import {ContentWithVideos} from '../../ContentWithVideos/ContentWithVideos'
import {Header} from '../../Header/Header'
import type {PropsT as HeaderT} from '../../Header/Header'
import type {PropsT as LogosT} from '../../ClientLogos/ClientLogos'
import type {PropsT as NavigationT} from '../../Navigation/Navigation'
import {ClientLogos} from '../../ClientLogos/ClientLogos'
import {TwoColumnRow} from '../../TwoColumnRow/TwoColumnRow'
import {Footer} from '../../Footer/Footer'
import {Reviews} from '../../Reviews/Reviews'
import type {PropsT as ReviewsT} from '../../Reviews/Reviews'
import Helmet from 'react-helmet'
import {defaultMeta} from '../../../defaultMeta'
import {Navigation} from '../../Navigation/Navigation'
import {SoundCloud} from '../../SoundCloud/SoundCloud'
import styled from 'styled-components'
import {BlockLayout} from '../styles'

type InfoWithPriceT = {
  title: string,
  description: {description: string},
  price: number,
  link: string,
}

type StudioT = {
  header: HeaderT,
  studioA: InfoWithPriceT,
  studioB: InfoWithPriceT,
  liveRecord: {title: string, description: {description: string}, price: number, videoLeft: string, videoRight: string},
  production: InfoWithPriceT,
  vocalRecord: InfoWithPriceT,
  toolsRecording: InfoWithPriceT,
  soundCloud: Array<{
    title: string,
    iframe: {
      iframe: string,
    },
  }>,
} & ReviewsT &
  NavigationT &
  LogosT

const Description = styled.p`
  height: 159px;
  overflow: hidden;
  padding: 0;
`

export const Studio = ({
  header,
  logos,
  studioA,
  studioB,
  liveRecord,
  production,
  vocalRecord,
  toolsRecording,
  reviews,
  navigation,
  soundCloud,
}: StudioT) => (
  <div>
    <Helmet meta={defaultMeta}>
      <title>Галерная 20</title>
    </Helmet>
    <Header {...header} />

    <TwoColumnRow
      left={
        <BlockLayout>
          <h2>{studioA.title}</h2>
          <Description>{studioA.description.description}</Description>
          <p>Стоимость от {studioA.price} в час</p>
          <p>
            <a href={studioA.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
      right={
        <BlockLayout>
          <h2>{studioB.title}</h2>
          <Description>{studioB.description.description}</Description>
          <p>Стоимость от {studioB.price} в час</p>
          <p>
            <a href={studioB.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
    />

    <ClientLogos logos={logos} />

    <TwoColumnRow
      left={
        <BlockLayout>
          <h2>{vocalRecord.title}</h2>
          <Description>{vocalRecord.description.description}</Description>
          <p>Стоимость от {vocalRecord.price} в час</p>
          <p>
            <a href={vocalRecord.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
      right={<SoundCloud content={soundCloud[0].iframe.iframe} />}
    />

    <TwoColumnRow
      invert
      left={<SoundCloud content={soundCloud[1].iframe.iframe} />}
      right={
        <BlockLayout>
          <h2>{toolsRecording.title}</h2>
          <Description>{toolsRecording.description.description}</Description>
          <p>Стоимость от {toolsRecording.price} в час</p>
          <p>
            <a href={toolsRecording.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
    />

    <BlockLayout>
      <ContentWithVideos videoLeft={liveRecord.videoLeft} videoRight={liveRecord.videoRight}>
        <h2>{liveRecord.title}</h2>
        <Description>{liveRecord.description.description}</Description>
        <p>Стоимость от {liveRecord.price} руб.</p>
      </ContentWithVideos>
    </BlockLayout>

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

    <div>
      <Reviews reviews={reviews} />
    </div>

    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <Studio {...pathContext} />
}

export default UnwrapPathContext
