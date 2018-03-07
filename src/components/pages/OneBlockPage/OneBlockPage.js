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

type InfoWithPriceT = {|
  title: string,
  description: {
    description: string,
  },
|}

type MediaT = {
  file: {
    url: string,
  },
}

export type OneBlockPageT = {
  header: HeaderT,
  description: InfoWithPriceT,
  descriptionMedia: MediaT,
}

export const OneBlockPage = ({header, description, descriptionMedia}: OneBlockPageT) => (
  <div>
    <Header {...header} />
    <TwoColumnRow
      left={
        <BlockLayout>
          <h2>{description.title}</h2>
          <p>{description.description.description}</p>
        </BlockLayout>
      }
      right={
        <BlockLayout>
          <Img src={descriptionMedia.file.url} />
        </BlockLayout>
      }
    />

    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <OneBlockPage {...pathContext} />
}

export default UnwrapPathContext
