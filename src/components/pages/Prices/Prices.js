//@flow

import React from 'react'
import styled from 'styled-components'
import {Header} from '../../Header/Header'
import {Footer} from '../../Footer/Footer'
import {Content} from '../../Content/Content'

type PricesT = {
  header: {title: string, description: string},
  content: string,
}

const PricesContent = styled.div`
  padding-top: 30px;
`

export const Prices = ({header, content}: PricesT) => (
  <div>
    <Header {...header} />
    <Content>
      <PricesContent dangerouslySetInnerHTML={{__html: content}} />
    </Content>
    <Footer />
  </div>
)
