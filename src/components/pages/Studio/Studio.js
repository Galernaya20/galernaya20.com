//@flow

import React from 'react'
import {ContentWithVideos} from '../../ContentWithVideos/ContentWithVideos'
import {Header} from '../../Header/Header'
import type {PropsT as HeaderT} from '../../Header/Header'
import type {PropsT as LogosT} from '../../ClientLogos/ClientLogos'
import {Content} from '../../Content/Content'
import {ClientLogos} from '../../ClientLogos/ClientLogos'
import {TwoColumnRow} from '../../TwoColumnRow/TwoColumnRow'
import {Footer} from '../../Footer/Footer'
import {Reviews} from '../../Reviews/Reviews'
import type {PropsT as ReviewsT} from '../../Reviews/Reviews'
import Helmet from 'react-helmet'
import {defaultMeta} from '../../../defaultMeta'

type StudioT = {
  header: HeaderT,
  logos: LogosT,
  studioA: {
    title: string,
    description: string,
    price: string,
    link: string,
  },
  studioB: {
    title: string,
    description: string,
    price: string,
    link: string,
  },
  liveRecord: {title: string, description: string, price: string, videos: string[]},
  production: {title: string, description: string, price: string, link: string},
  vocalRecord: {title: string, description: string, price: string, link: string},
  toolsRecording: {title: string, description: string, price: string, link: string},
} & ReviewsT

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
          <p>{studioA.description}</p>
          <p>Стоимость от {studioA.price} в час</p>
          <p>
            <a href={studioA.link}>Подробности</a>
          </p>
        </div>
      }
      right={
        <div>
          <h2>{studioB.title}</h2>
          <p>{studioB.description}</p>
          <p>Стоимость от {studioB.price} в час</p>
          <p>
            <a href={studioB.link}>Подробности</a>
          </p>
        </div>
      }
    />

    <ClientLogos logos={logos} />

    <TwoColumnRow
      left={<div>видео</div>}
      right={
        <div>
          <h2>{vocalRecord.title}</h2>
          <p>{vocalRecord.description}</p>
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
          <p>{toolsRecording.description}</p>
          <p>Стоимость от {toolsRecording.price} в час</p>
          <p>
            <a href={toolsRecording.link}>Подробности</a>
          </p>
        </div>
      }
      right={<div>видео</div>}
    />

    {false && (
      <ContentWithVideos videoIds={liveRecord.videos}>
        <h2>{liveRecord.title}</h2>
        <p>{liveRecord.description}</p>
        <p>Стоимость от {liveRecord.price} руб.</p>
      </ContentWithVideos>
    )}

    <TwoColumnRow
      left={
        <div>
          <h2>{production.title}</h2>
          <p>{production.description}</p>
          <p>Стоимость от {production.price} в час</p>
          <p>
            <a href={production.link}>Подробности</a>
          </p>
        </div>
      }
      right={
        <div>
          <p>Аранжировка</p>
          <p>Сведение</p>
          <p>Мастеринг</p>
          <p>Монтаж</p>
          <p>Битмейкинг</p>
        </div>
      }
    />

    <Content>
      <Reviews reviews={reviews} />
    </Content>

    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <Studio {...pathContext} />
}

export default UnwrapPathContext
