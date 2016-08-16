import React, { Component } from 'react'
import HeaderTitle from './header-title.js'

class HeaderContainer extends Component {
  render() {

    return (
      <div className='page-header'>
        <HeaderTitle />
      </div>
    )
  }
}

export default HeaderContainer