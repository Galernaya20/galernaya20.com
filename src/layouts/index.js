//@flow

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {NavBar} from '../components/NavBar/NavBar'

import './index.css'

const TemplateWrapper = ({children}: {children: *}) => (
  <div>
    <Helmet title="Galernaya 20" />
    <NavBar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
