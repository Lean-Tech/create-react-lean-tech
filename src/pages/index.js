import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Main from './Layout/main'

export default class Screens extends Component {

  constructor (props) {
    super(props)
    this.state = {
      device: 'UNSET'
    }

    /** Devices */
    this.phone = 576
    this.tablet = 829
    this.desktop = 1200
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions = () => {
    if (window.innerWidth <= this.tablet) {
      this.setState({ device: 'phone' })
    }

    // if(window.innerWidth <= this.tablet) {
    //     this.setState({ device: 'tablet'});
    // }

    if (window.innerWidth > this.tablet) {
      this.setState({ device: 'desktop' })
    }
  };

  /**
   * Add event listener when the dimensions of the page changes
   */
  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)

  }

  /**
   * Removes event listener when the dimensions of the page changes
   */
  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  isAuthenticated(){
    return true;
  }

  render () {
    if (window.innerWidth <= this.tablet) {
      return (
        <div>
          <Main device={this.state.device} />
        </div>
      )
    } else if (window.innerWidth > this.tablet) {
      return (
        this.isAuthenticated()
          ? <div>
              <Main device={this.state.device} />
            </div>
          : <Redirect to='/login' />
      )
    }
    return 'unset'
  }
}
