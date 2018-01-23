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

const UnwrapPathContextContacts = ({
  pageResources: {json: {pathContext}},
}: {
  pageResources: {json: {pathContext: Object}},
}) => <Contacts {...pathContext} />

export default UnwrapPathContextContacts
