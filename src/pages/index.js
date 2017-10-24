import React from 'react'
import Helmet from 'react-helmet'
import {defaultMeta} from '../defaultMeta'

const IndexPage = () => (
  <div>
    <h1>Index</h1>

    <Helmet meta={defaultMeta}>
      <title>Галерная 20</title>
    </Helmet>
  </div>
)

export default IndexPage
