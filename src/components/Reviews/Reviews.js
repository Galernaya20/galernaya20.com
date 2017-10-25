//@flow

import React, {Component} from 'react'
import cn from 'classnames'
import st from './Reviews.module.css'

class Reviews extends Component<*> {
  render() {
    const {reviews} = this.props
    return (
      <div className={st.reviews}>
        {reviews.map(review => (
          <div key={review.author} className={st.review}>
            <span className={st.author}>{review.author}</span>
          </div>
        ))}
      </div>
    )
  }
}

export {Reviews}
