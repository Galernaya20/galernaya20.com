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
    content: 'SPB Frontend',
  },
  {
    property: 'og:description',
    content: 'Петербургское сообщество фронтенд-разработчиков',
  },
  {
    property: 'og:image',
    content:
      'https://ucarecdn.com/3d33c161-b440-4710-b3dd-ad980640dba8/-/preview/-/resize/1200x/-/crop/1200x630/0,300/spb_frontend_social.png',
  },
  {
    property: 'og:url',
    content: 'http://spb-frontend.ru/',
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:site',
    content: '@spb_frontend',
  },
  {
    name: 'twitter:image:alt',
    content: 'SPB Frontend. Frontend artisans',
  },
  {
    name: 'description',
    content: 'Петербургское сообщество фронтенд-разработчиков',
  },
  {
    name: 'keywords',
    content: 'frontend, spb-frontend',
  },
]
