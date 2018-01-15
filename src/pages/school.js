//@flow

import React from 'react'
import {Header} from '../components/Header/Header'
import {TwoColumnRow} from '../components/TwoColumnRow/TwoColumnRow'
import {schoolData} from '../components/pages.stories'

const School = ({
  header,
  selfProduction,
  recordingAndMixing,
  dj,
}: {
  header: {title: string, description: string},
  selfProduction: {title: string, description: string, price: string, link: string, src: string},
  recordingAndMixing: {title: string, description: string, price: string, link: string, src: string},
  dj: {title: string, description: string, price: string, link: string, src: string},
}) => (
  <div>
    <Header {...header} />
    <TwoColumnRow
      style={{height: 260}}
      left={
        <div>
          <h2>{selfProduction.title}</h2>
          <p>{selfProduction.description}</p>
          <p>Стоимость от {selfProduction.price} в час</p>
          <p>
            <a href={selfProduction.link}>Подробности</a>
          </p>
        </div>
      }
      right={<div>Image or video</div>}
    />
    <TwoColumnRow
      invert
      style={{height: 260}}
      left={<div>Image or video</div>}
      right={
        <div>
          <h2>{recordingAndMixing.title}</h2>
          <p>{recordingAndMixing.description}</p>
          <p>Стоимость от {recordingAndMixing.price} в час</p>
          <p>
            <a href={recordingAndMixing.link}>Подробности</a>
          </p>
        </div>
      }
    />
    <TwoColumnRow
      style={{height: 260}}
      left={
        <div>
          <h2>{dj.title}</h2>
          <p>{dj.description}</p>
          <p>Стоимость от {dj.price} в час</p>
          <p>
            <a href={dj.link}>Подробности</a>
          </p>
        </div>
      }
      right={<div>Image or video</div>}
    />
  </div>
)
const SchoolPage = () => (
  <div>
    <School {...schoolData} />
  </div>
)

export default SchoolPage
