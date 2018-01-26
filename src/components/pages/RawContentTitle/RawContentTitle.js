//@flow

import React from 'react'
import {Footer} from '../../Footer/Footer'
import Helmet from 'react-helmet'
import {defaultMeta} from '../../../defaultMeta'
import {BlockLayout} from '../styles'

export const RawContentTitle = ({content, title}: {content: string, title?: string}) => (
  <div>
    <BlockLayout
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
  return <RawContentTitle {...pathContext} />
}

export default UnwrapPathContext
