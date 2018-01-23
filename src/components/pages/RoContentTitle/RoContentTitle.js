//@flow

import React from 'react'
import {Footer} from '../../Footer/Footer'
import Helmet from 'react-helmet'
import {defaultMeta} from '../../../defaultMeta'

export const RoContentTitle = ({content, title}: {content: string, title?: string}) => (
  <div>
    <div
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
  return <RoContentTitle {...pathContext} />
}

export default UnwrapPathContext
