//@flow

import React from 'react'
import Helmet from 'react-helmet'
import {defaultMeta} from '../defaultMeta'
import StudioPage from './studio'

import {studioData} from '../components/pages.stories'
const IndexPage = () => (
  <div>
    <StudioPage {...studioData} />

    <Helmet meta={defaultMeta}>
      <title>Галерная 20</title>
    </Helmet>
  </div>
)

export default IndexPage
