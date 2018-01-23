//@flow

import React, {Component} from 'react'
import styled from 'styled-components'

type PropsT = {
  reviews: Array<{author: string, text: string, photo: string}>,
}

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`

const Review = styled.div`
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
`
const AuthorPicture = styled.picture`
  width: 160px;
  min-width: 160px;
  height: 160px;
  min-height: 160px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
`
const Content = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`
const Text = styled.p`
  font-size: 24px;
`
const Author = styled.span`
  text-align: left;
`

export class Reviews extends Component<PropsT> {
  render() {
    const {reviews} = this.props
    return (
      <ReviewsContainer>
        {reviews.map(review => (
          <Review key={review.author}>
            <AuthorPicture>
              <img src={review.photo} width="160" />
            </AuthorPicture>
            <Content>
              <Text>&ldquo;{review.text}&rdquo;</Text>
              <Author>{review.author}</Author>
            </Content>
          </Review>
        ))}
      </ReviewsContainer>
    )
  }
}
