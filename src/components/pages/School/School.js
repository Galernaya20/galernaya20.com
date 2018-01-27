//@flow

import React from 'react'
import {Header} from '../../Header/Header'
import type {PropsT as HeaderT} from '../../Header/Header'
import {Footer} from '../../Footer/Footer'
import {TwoColumnRow} from '../../TwoColumnRow/TwoColumnRow'
import {BlockLayout} from '../styles'
import styled from 'styled-components'

const Img = styled.img`
  max-width: 100%;
  height: auto;
`

type InfoWithPriceT = {
  title: string,
  description: {
    description: string,
  },
  price: number,
  link: string,
}
type MediaT = {
  file: {
    url: string,
  },
}

type SchoolT = {
  header: HeaderT,
  selfProduction: InfoWithPriceT,
  recordingAndMixing: InfoWithPriceT,
  dj: InfoWithPriceT,
  selfProductionMedia: MediaT,
  recordingAndMixingMedia: MediaT,
  djMedia: MediaT,
}

export const School = ({
  header,
  selfProduction,
  recordingAndMixing,
  dj,
  selfProductionMedia,
  recordingAndMixingMedia,
  djMedia,
}: SchoolT) => (
  <div>
    <Header {...header} />
    <TwoColumnRow
      left={
        <BlockLayout>
          <h2>{selfProduction.title}</h2>
          <p>{selfProduction.description.description}</p>
          <p>Стоимость от {selfProduction.price} в час</p>
          <p>
            <a href={selfProduction.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
      right={
        <BlockLayout>
          <Img src={selfProductionMedia.file.url} />
        </BlockLayout>
      }
    />
    <TwoColumnRow
      invert
      left={
        <BlockLayout>
          <Img src={recordingAndMixingMedia.file.url} />
        </BlockLayout>
      }
      right={
        <BlockLayout>
          <h2>{recordingAndMixing.title}</h2>
          <p>{recordingAndMixing.description.description}</p>
          <p>Стоимость от {recordingAndMixing.price} в час</p>
          <p>
            <a href={recordingAndMixing.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
    />
    <TwoColumnRow
      left={
        <BlockLayout>
          <h2>{dj.title}</h2>
          <p>{dj.description.description}</p>
          <p>Стоимость от {dj.price} в час</p>
          <p>
            <a href={dj.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
      right={
        <BlockLayout>
          <Img src={djMedia.file.url} />
        </BlockLayout>
      }
    />
    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <School {...pathContext} />
}

export default UnwrapPathContext
