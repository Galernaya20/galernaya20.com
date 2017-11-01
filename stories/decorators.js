import React, {Component} from 'react'
import mapValues from 'lodash/mapValues'
import PropTypes from 'prop-types'

export const contextDecorator = (context: Object) => {
  const StoryComponent = story => {
    class Context extends Component {
      getChildContext() {
        return context
      }
      render() {
        return <div>{this.props.children}</div>
      }
    }

    Context.childContextTypes = mapValues(context, () => PropTypes.object)

    return <Context>{story()}</Context>
  }
  return StoryComponent
}
