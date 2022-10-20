import React, { Component } from 'react'
import Menu from "./Menu"
import '../PageFormat.css'
import '../OrderedList.css'

export default class LR extends Component {
  render() {
    return (
        <div>
            <Menu />
            <div className='header'>
              <h5><b>References</b></h5>
              <ol className='spacing'>
                <li value="1" className="item">
                  Agar, M. (1996). <i>The Professional Stranger, 2<sup>nd</sup> ed</i>. Academic Press.
                </li>
                <li value="2" className="item">
                  Norman, D. (2013). <i>The Design of Everyday Things</i>. Perseus Books Group: Basic Books.
                </li>
                <li value="3" className="item">
                  O'Reilly, K. (2005). <i>Ethnographic Methods</i>. Routledge.
                </li>
                <li value="4" className="item">
                  Tullis, T., &amp; Albert, B. (2008). <i>Measuring The User Experience</i>. Morgan Kaufmann.
                </li>
              </ol>
            </div>
        </div>
    )
  }
}