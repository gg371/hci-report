import React, { Component } from 'react'
import Menu from "./Menu"
import '../PageFormat.css'

export default class Gracyn extends Component {
  render() {
    return (
        <div>
            <Menu />
            <div className='header'>
              <h5><b>Gracyn's Reflection</b></h5>
              <hr />
              <br />
              <h6><b>Role in the study </b></h6>
              <p>
              I aided in the organisation of paperwork and what we needed to do before conducting our user sessions. 
              <br /><br/>
              Throughout the data collection process, I helped provide notes and observations during the sessions with the participants. 
              Both Richard and I combined our notes across all the sessions to have a more comprehensive dataset to analyse for our report. 
              <br /><br/>
              In the process of creating the report, I aided in the structure and final drafts. I also created a static web app to host our 
              report for the final submission using JavaScript and HTML. 
              </p>
              <br />
              <h6><b>How it fits in degree</b></h6>
              <p>
                My degree program is in computer science, which fits in nicely with our study. Nowadays, a lot of things involve some sort 
                of computer-based software in order to operate — the Korg keyboard being one of them. It was interesting to work with a piece 
                of software that I normally wouldn’t get to use during university courses. Having this experience is great in helping me be 
                exposed to a more diverse range of software products.
                <br /><br />
                After conducting this study, it has made me more aware of what I need to be considering when developing products in the future,
                whether it be a more music-based company or elsewhere. In terms of what features should be added, it is good to first consider 
                if that feature will even be used by the user — if there is an actual need for it. In the case of this study, some participants 
                just found all the electronics of the keyboard distracting from the instrument itself. It could be that some of those features 
                are not used frequently enough by the users to be useful to the product. These kinds of considerations are important, both in 
                time and money for the company, and for the user experience. 
              </p>
              <br />
              <h6><b>How it fits into IT/ IT experience</b></h6>
                <p>
                This study fits into the IT field well, with how much the field is growing it is important to understand how people are using the 
                technology available to them — both for improving the user experience and developing useful products. It is too easy to ignore 
                user perspectives during the development process, as tech companies may believe it will save them money and time or developers 
                may believe their design is what users want without getting real opinions. A developer’s view is not a customer’s view, and most 
                places seem to forget that. Though it is the users of the products that get hurt when that happens. So having these studies done 
                is a great way to see the uses of the product and improve them.
                <br /><br />
                Our observation-based ethnographic study on the Korg Grandstage piano highlighted useful information about how certain users went 
                about playing on the keyboard. Though the keyboard is an already developed product, further changes to it can be more challenging 
                and costly. I’m not saying it’s impossible to make changes now, but it is less likely — as well as the fact that our study focused 
                on a more broad scope than specific features that could need improving. Something that I would change for future research studies 
                is to focus on products still in early stages, where more change is possible. 
                </p>
            </div>
        </div>
    )
  }
}
//what I learned, what would I change/keep, what went wrong?, my role