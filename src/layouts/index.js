import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const defaultHelmetMeta = [
  {
    name: 'theme-color',
    content: '#ffffff',
  },
  {
    property: 'og:title',
    content: 'GALERNAYA 20',
  },
  {
    property: 'og:description',
    content: 'GALERNAYA 20 - это творческий синдикат, в состав которого входят: Студия звукозаписи интернет-радио арт и хэппинг сектор',
  },
  {
    property: 'og:image',
    content:
      'https://pbs.twimg.com/profile_images/1364468666/Logo_G20_for_web_400x400',
  },
  {
    property: 'og:url',
    content: 'http://galernaya20.com/',
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:site',
    content: '@Galernaya20',
  },
  {
    name: 'twitter:image:alt',
    content: 'GALERNAYA 20 - студия звукозаписи',
  },
  {
    name: 'description',
    content: 'GALERNAYA 20 - это творческий синдикат, в состав которого входят: Студия звукозаписи интернет-радио арт и хэппинг сектор',
  },
  {
    name: 'keywords',
    content: 'galernaya 20, sound production',
  },
]
