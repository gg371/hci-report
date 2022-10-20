import React, { Component } from 'react'
import Menu from "./Menu"
import '../PageFormat.css'

export default class Richard extends Component {
  render() {
    return (
        <div>
            <Menu />
            <div className='header'>
              <h5><b>Richard's Reflection</b></h5>
              <hr />
              <br />
              <h6><b>Role in the study </b></h6>
              <p>
                We worked equally on researching our research method. I wrote the first draft for our research method.  
                <br/><br/>
                I found the 6 pianists who kindly volunteered to play for us. It’s my piano – I helped users to use the 
                instrument during sessions. It was great to have Gracyn’s support – she had a more general perspective on feedback.  
                <br/><br/>
                After we typed up our raw data independently, I wrote the draft data results for the report. I tried very hard to 
                stay out of the way when it came to building the website, because Gracyn is 10x better at it than me.  
                We finalised the report together.
              </p>
              <br />
              <h6><b>How it fits in degree/ AUT</b></h6>
              <p>
                Overall, our 6 pianists were all very happy playing a digital instrument, just as long as they didn’t have to 
                do anything different. From a design perspective, if I was working on a product like this that added digital 
                features to an established non-digital product, I would make very sure that the digital features did not get 
                in the way – the user should be able to access all core functions without the digital elements causing a barrier. 
                For any product where there is a need to learn something digital, then the physical product needs to be embedded 
                in a full service that helps users learn how to use the digital features.  
                <br/><br/>
                Clearly, good product design principles and methods should be applied to multi-million dollar product development. 
                But they also apply to 1 scruffy coded function turned in for a scripting assignment. Both products need to be usable 
                (e.g. good comments to explain how the scruffy script works).  This research product encouraged me to ask 2 questions 
                whenever I am asking a user to consume my work as a product. 1) What is the cultural context for what we are doing – will 
                my output feel right to the user in this context? 2) Have I clearly delivered the product I was asked for? E.g. if the side 
                of the packaging says ‘piano’ then it needs to be really clear to the user that I have sent them a piano. 
              </p>
              <br />
              <h6><b>How it fits into IT/ IT experience</b></h6>
              <p>
                <b>Community: </b> 
                In the IT context, a piano is a fine product to research using ethnographic methods because all music playing has a 
                connection with a community. O’Reilly’s general comments about connecting with a community in all ethnographic studies 
                were very apt. Many of the players knew each other. They spoke about using the same shared instruments elsewhere. We were 
                learning not just about a connection between a device and a user, we also saw that placed in a community. I suspect that 
                in the IT industry, this dynamic is often just as important, but is unappreciated during product development. Even for a very 
                technical product like accounting software, the product must fit well with the needs of a community of users.  
                <br/><br/><b>Conceptual Model: </b>
                I was very interested in how well the Korg matched the players’ conceptual model for what a piano should do. Overall, I think 
                that the Korg did the core job of being a piano very well. I.e. everyone accepted that it was a piano making noise via the loudspeakers.
                Applying this to other IT products, it shows the importance of understanding existing models for how people use tools to solve problems. 
                E.g. the same challenge exists when developing accounting software. Accountants have a detailed theoretical model for what counts as good 
                accounting practice – no matter how many new features the software has, it won’t succeed unless it fits the users’ model.
                <br/><br/><b>Ethnographic approach: </b>
                The product review that we did with the Korg was a useful market definition exercise. A quick visit to the music store showed that many 
                piano products are differentiated by the key features we highlighted in our research. This research process would be useful to highlight the
                key issues for developing a new product. However, many of our conclusions were very general – to make investment decisions for developing a 
                new product, follow up research using more structured empirical methods would be needed.  
                <br/><br/><b>Mappings and Constraints: </b>
                This issue affects all IT products. Many modern IT products are either a recreation of an analog product, or a recreation of an earlier 
                digital product (e.g. a smart phone app that recreates the functions of a desktop PC, on a touch screen). Mapping to understood devices 
                is often seen as an optional extra. In fact, mapping to things that are familiar to users is essential if you want them to start using your product.  
              </p>
            </div>
        </div>
    )
  }
}