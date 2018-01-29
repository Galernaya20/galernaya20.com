//@flow

import React from 'react'
import type {PropsT as HeaderT} from '../../Header/Header'
import type {PropsT as LogosT} from '../../ClientLogos/ClientLogos'
import type {PropsT as NavigationT} from '../../Navigation/Navigation'
import {Footer} from '../../Footer/Footer'
import type {PropsT as ReviewsT} from '../../Reviews/Reviews'
import Helmet from 'react-helmet'
import {defaultMeta} from '../../../defaultMeta'
import {ContentLayout} from '../styles'

type TeamT = {
  header: HeaderT,
  title: string,
  content: string,
} & ReviewsT &
  NavigationT &
  LogosT

export const Team = ({title, content}: TeamT) => (
  <div>
    <ContentLayout
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
    <Helmet meta={defaultMeta}>
      <title>{title}</title>
    </Helmet>
    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <Team {...pathContext} />
}

export default UnwrapPathContext
