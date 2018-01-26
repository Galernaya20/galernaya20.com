//@flow

import React from 'react'
import {Header} from '../../Header/Header'
import type {PropsT as HeaderT} from '../../Header/Header'
import {Footer} from '../../Footer/Footer'
import {TwoColumnRow} from '../../TwoColumnRow/TwoColumnRow'
import {BlockLayout} from '../styles'

type SchoolT = {
  header: HeaderT,
  selfProduction: {title: string, description: string, price: string, link: string, src: string},
  recordingAndMixing: {title: string, description: string, price: string, link: string, src: string},
  dj: {title: string, description: string, price: string, link: string, src: string},
}

export const School = ({header, selfProduction, recordingAndMixing, dj}: SchoolT) => (
  <div>
    <Header {...header} />
    <TwoColumnRow
      left={
        <BlockLayout>
          <h2>{selfProduction.title}</h2>
          <p>{selfProduction.description}</p>
          <p>Стоимость от {selfProduction.price} в час</p>
          <p>
            <a href={selfProduction.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
      right={<BlockLayout>Image or video</BlockLayout>}
    />
    <TwoColumnRow
      invert
      left={<div>Image or video</div>}
      right={
        <BlockLayout>
          <h2>{recordingAndMixing.title}</h2>
          <p>{recordingAndMixing.description}</p>
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
          <p>{dj.description}</p>
          <p>Стоимость от {dj.price} в час</p>
          <p>
            <a href={dj.link}>Подробности</a>
          </p>
        </BlockLayout>
      }
      right={<BlockLayout>Image or video</BlockLayout>}
    />
    <Footer />
  </div>
)
