import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

export default class AppContainer extends Component {
  static propTypes = {

  }
  render () {
    return (
      <div>
        <h1>Scrape the News</h1>
      </div>
    )
  }
}

//export default connect()(AppContainer);