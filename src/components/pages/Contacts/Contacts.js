//@flow

import React from 'react'

export const Contacts = ({html}: {html: string}) => (
  <div
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
)

const UnwrapPathContextContacts = ({
  pageResources: {json: {pathContext}},
}: {
  pageResources: {json: {pathContext: Object}},
}) => <Contacts {...pathContext} />

export default UnwrapPathContextContacts
