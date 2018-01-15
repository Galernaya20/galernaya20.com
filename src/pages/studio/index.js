//@flow

import React from 'react'
import {ContentWithVideos} from '../../components/ContentWithVideos/ContentWithVideos'
import {Header} from '../../components/Header/Header'
import {Content} from '../../components/Content/Content'
import {NavBar} from '../../components/NavBar/NavBar'
import {ClientLogos} from '../../components/ClientLogos/ClientLogos'
import {TwoColumnRow} from '../../components/TwoColumnRow/TwoColumnRow'

const StudioPage = ({
  header,
  studioA,
  studioB,
  liveRecord,
  production,
  vocalRecord,
  toolsRecording,
}: {
  header: {title: string, description: string, src?: string},
  studioA: {title: string, description: string, price: string, link: string},
  studioB: {title: string, description: string, price: string, link: string},
  liveRecord: {title: string, description: string, price: string, videos: string[]},
  production: {title: string, description: string, price: string, link: string},
  vocalRecord: {title: string, description: string, price: string, link: string},
  toolsRecording: {title: string, description: string, price: string, link: string},
}) => (
  <div>
    <Header {...header} />

    <TwoColumnRow
      style={{height: 260}}
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

    <ClientLogos />

    <TwoColumnRow
      style={{height: 260}}
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
      style={{height: 260}}
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

    <ContentWithVideos videoIds={liveRecord.videos}>
      <h2>{liveRecord.title}</h2>
      <p>{liveRecord.description}</p>
      <p>Стоимость от {liveRecord.price} руб.</p>
    </ContentWithVideos>

    <TwoColumnRow
      style={{height: 260}}
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
      <div>Компонетн Слайдер </div>
    </Content>

    <Content>
      <div>Компонент Как с нами связяться</div>
    </Content>
  </div>
)

export default StudioPage
