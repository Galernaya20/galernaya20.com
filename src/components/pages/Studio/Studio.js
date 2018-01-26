//@flow

import React from 'react'
import {ContentWithVideos} from '../../ContentWithVideos/ContentWithVideos'
import {Header} from '../../Header/Header'
import type {PropsT as HeaderT} from '../../Header/Header'
import type {PropsT as LogosT} from '../../ClientLogos/ClientLogos'
import type {PropsT as NavigationT} from '../../Navigation/Navigation'
import {Content} from '../../Content/Content'
import {ClientLogos} from '../../ClientLogos/ClientLogos'
import {TwoColumnRow} from '../../TwoColumnRow/TwoColumnRow'
import {Footer} from '../../Footer/Footer'
import {Reviews} from '../../Reviews/Reviews'
import type {PropsT as ReviewsT} from '../../Reviews/Reviews'
import Helmet from 'react-helmet'
import {defaultMeta} from '../../../defaultMeta'
import {Navigation} from '../../Navigation/Navigation'
import {SoundCloud} from '../../SoundCloud/SoundCloud'

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

export const Studio = ({
  header,
  logo,
  studioA,
  studioB,
  liveRecord,
  production,
  vocalRecord,
  toolsRecording,
  review,
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
        <div>
          <h2>{studioA.title}</h2>
          <p>{studioA.description.description}</p>
          <p>Стоимость от {studioA.price} в час</p>
          <p>
            <a href={studioA.link}>Подробности</a>
          </p>
        </div>
      }
      right={
        <div>
          <h2>{studioB.title}</h2>
          <p>{studioB.description.description}</p>
          <p>Стоимость от {studioB.price} в час</p>
          <p>
            <a href={studioB.link}>Подробности</a>
          </p>
        </div>
      }
    />

    <ClientLogos logo={logo} />

    <TwoColumnRow
      left={<SoundCloud content={soundCloud[0].iframe.iframe} />}
      right={
        <div>
          <h2>{vocalRecord.title}</h2>
          <p>{vocalRecord.description.description}</p>
          <p>Стоимость от {vocalRecord.price} в час</p>
          <p>
            <a href={vocalRecord.link}>Подробности</a>
          </p>
        </div>
      }
    />

    <TwoColumnRow
      invert
      left={
        <div>
          <h2>{toolsRecording.title}</h2>
          <p>{toolsRecording.description.description}</p>
          <p>Стоимость от {toolsRecording.price} в час</p>
          <p>
            <a href={toolsRecording.link}>Подробности</a>
          </p>
        </div>
      }
      right={<SoundCloud content={soundCloud[1].iframe.iframe} />}
    />

    <ContentWithVideos videoLeft={liveRecord.videoLeft} videoRight={liveRecord.videoRight}>
      <h2>{liveRecord.title}</h2>
      <p>{liveRecord.description.description}</p>
      <p>Стоимость от {liveRecord.price} руб.</p>
    </ContentWithVideos>

    <TwoColumnRow
      left={
        <div>
          <h2>{production.title}</h2>
          <p>{production.description.description}</p>
          <p>Стоимость от {production.price} в час</p>
          <p>
            <a href={production.link}>Подробности</a>
          </p>
        </div>
      }
      right={<Navigation navigation={navigation} />}
    />

    <Content>
      <Reviews review={review} />
    </Content>

    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <Studio {...pathContext} />
}

export default UnwrapPathContext
