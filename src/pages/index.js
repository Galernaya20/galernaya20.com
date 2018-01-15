//@flow

import React from 'react'
import Helmet from 'react-helmet'
import {defaultMeta} from '../defaultMeta'
import {Studio} from '../components/pages/Studio/Studio'
import studioData from '../components/pages/Studio/fixture'

const IndexPage = () => (
  <div>
    <Studio {...studioData} />

    <Helmet meta={defaultMeta}>
      <title>Галерная 20</title>
    </Helmet>
  </div>
)

export default IndexPage
