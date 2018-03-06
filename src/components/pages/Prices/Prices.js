//@flow

import React from 'react'
import styled from 'styled-components'
import {Header} from '../../Header/Header'
import type {PropsT as HeaderT} from '../../Header/Header'
import {Footer} from '../../Footer/Footer'
import {BlockLayout} from '../styles'

type PricesT = {
  header: HeaderT,
  content: string,
}

const PricesContent = styled.div`
  padding-top: 30px;
`

export const Prices = ({header, content}: PricesT) => (
  <div>
    <Header {...header} />
    <BlockLayout>
      <PricesContent dangerouslySetInnerHTML={{__html: content}} />
    </BlockLayout>
    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <Prices {...pathContext} />
}

export default UnwrapPathContext
