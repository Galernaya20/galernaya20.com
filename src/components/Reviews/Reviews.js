//@flow

import React, {Component} from 'react'
import cn from 'classnames'
import st from './Reviews.module.css'
import {Content} from '../Content/Content'

type PropsT = {
  reviews: Array<{author: string, text: string, photo: string}>,
}

class Reviews extends Component<PropsT> {
  render() {
    const {reviews} = this.props
    return (
      <Content className={st.reviews}>
        {reviews.map(review => (
          <div key={review.author} className={st.review}>
            <picture className={st.autor_picture}>
              <img src={review.photo} width="160" />
            </picture>
            <div className={st.content}>
              <p className={st.text}>&ldquo;{review.text}&rdquo;</p>
              <span className={st.author}>{review.author}</span>
            </div>
          </div>
        ))}
      </Content>
    )
  }
}

export {Reviews}
