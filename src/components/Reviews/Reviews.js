//@flow

import React, {Component} from 'react'
import cn from 'classnames'
import styled from 'styled-components'

type PropsT = {
  reviews: Array<{author: string, text: string, photo: string}>,
}

const Self = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

export class Reviews extends Component<PropsT> {
  render() {
    const {reviews} = this.props
    return (
      <Self>
        {reviews.map(review => (
          <div key={review.author}>
            <span>{review.author}</span>
          </div>
        ))}
      </Self>
    )
  }
}
