// @flow

import React from 'react'
import styled from 'styled-components'

const SoundContainer = styled.div``

export const SoundCloud = ({content}: string) => (
  <SoundContainer>
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </SoundContainer>
)
