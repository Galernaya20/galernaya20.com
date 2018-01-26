// @flow

import React from 'react'
import styled from 'styled-components'

const SoundContainer = styled.div`
  width: 100%;
`

export const SoundCloud = ({content}: {content: string}) => (
  <SoundContainer
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
)
