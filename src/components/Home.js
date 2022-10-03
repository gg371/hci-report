import React, { Component } from 'react'
import '../PageFormat.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        {/* TODO: Table of Contents */}
        <section className="header">
            <div>
              <h5>HCI Report</h5>
            </div>
            <div className='header'>
              <h6>Course: Applied Human Computer Interaction (COMP719)</h6>
              <h6>University: Auckland University of Technology</h6>
              <h6>Authors: Gracyn Green and Richard Anstice</h6>
              <h6>Date: dd/mm/yyyy</h6>
            </div>
            <div>
              <h5>Introduction</h5>
            </div>
            <div>
              <h5>Method</h5>
            </div>
            <div>
              <h5>Data Analysis</h5>
            </div>
            <div>
              <h5>Results</h5>
            </div>
            <div>
              <h5>Conclusion</h5>
            </div>
        </section>
      </div>
    )
  }
}