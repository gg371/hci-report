import React, { Component } from 'react'
import Menu from "./Menu"
import '../PageFormat.css'

export default class Gracyn extends Component {
  render() {
    return (
        <div>
            <Menu />
            <div className='header'>
              <h5>Reflection</h5>
            </div>
        </div>
    )
  }
}