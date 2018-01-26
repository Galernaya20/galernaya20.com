//@flow

import React from 'react'
import {Footer} from '../../Footer/Footer'

export const Contacts = ({html}: {html: string}) => (
  <div>
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
    <Footer />
  </div>
)

const UnwrapPathContextContacts = ({pathContext}: any) => {
  return <Contacts {...pathContext} />
}

export default UnwrapPathContextContacts
