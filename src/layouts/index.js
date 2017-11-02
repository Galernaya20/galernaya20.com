//@flow
import React from 'react'
import Head from 'next/head'
import {NavBar} from '../components/NavBar/NavBar'

import './index.css'

export const Layout = ({children}: {children: *}) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    <div>{children}</div>
  </div>
)
