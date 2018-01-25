//@flow

import React from 'react'
import {Footer} from '../../Footer/Footer'
import Helmet from 'react-helmet'
import {defaultMeta} from '../../../defaultMeta'
import {Header} from '../../Header/Header'

export const Page = ({header}: {header: Object}) => (
  <div>
    <Header {...header} />
    <Helmet meta={defaultMeta}>
      <title>{header.title}</title>
    </Helmet>
    <Footer />
  </div>
)

const UnwrapPathContext = ({pathContext}: *) => {
  return <Page {...pathContext} />
}

export default UnwrapPathContext
