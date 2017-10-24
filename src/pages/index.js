import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {defaultMeta} from '../defaultMeta'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <Helmet meta={defaultMeta}>
      <title>Галерная 20</title>
    </Helmet>

  </div>
)

export default IndexPage
