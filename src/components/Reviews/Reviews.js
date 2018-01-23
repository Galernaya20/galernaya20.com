//@flow

import React, {Component} from 'react'
import styled from 'styled-components'
import {LeftArrowIcon} from '../icons/LeftArrowIcon'
import {RightArrowIcon} from '../icons/RightArrowIcon'

type PropsT = {
  reviews: Array<{author: string, text: string, photo: string}>,
}

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin: 50px;
  position: relative;
  padding-left: 70px;
  padding-right: 70px;
`

const Review = styled.div`
  width: 100%;
  display: ${props => (props.index == props.activeIndex ? 'flex' : 'none')};
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
const LeftArrow = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`
const RightArrow = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`

export class Reviews extends Component<PropsT, {activeIndex: number}> {
  state = {
    activeIndex: 0,
  }
  goToSlide(index: number) {
    this.setState({
      activeIndex: index,
    })
  }
  goToPrevSlide(e: any) {
    e.preventDefault()

    let index = this.state.activeIndex
    const {reviews} = this.props
    const reviewsLength = reviews.length

    if (index < 1) {
      index = reviewsLength
    }

    --index

    this.setState({
      activeIndex: index,
    })
  }

  goToNextSlide(e: any) {
    e.preventDefault()
    let index = this.state.activeIndex
    const {reviews} = this.props
    const reviewsLength = reviews.length - 1

    if (index === reviewsLength) {
      index = -1
    }

    ++index

    this.setState({
      activeIndex: index,
    })
  }
  render() {
    const {activeIndex} = this.state
    const {reviews} = this.props
    return (
      <ReviewsContainer>
        {reviews.length > 1 ? (
          <LeftArrow onClick={e => this.goToPrevSlide(e)}>
            <LeftArrowIcon />
          </LeftArrow>
        ) : null}
        {reviews.length > 1 ? (
          <RightArrow onClick={e => this.goToNextSlide(e)}>
            <RightArrowIcon />
          </RightArrow>
        ) : null}

        {reviews.map((review, index) => (
          <Review index={index} activeIndex={activeIndex} key={review.author}>
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
