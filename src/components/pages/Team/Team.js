//@flow

import React from 'react'
import {Footer} from '../../Footer/Footer'
import Helmet from 'react-helmet'
import {defaultMeta} from '../../../defaultMeta'
import {ContentLayout} from '../styles'

type TeamT = {
  title: string,
  content: string,
}

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
