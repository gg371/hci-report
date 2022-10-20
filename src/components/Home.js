import React, { Component } from 'react'
import '../PageFormat.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
//import TOC from "./toc/index";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        {/*<TOC />*/}
        <section className="header">
            <div style={{marginTop: '1rem', textAlign: 'center'}}>
              <h3><b>HCI Report</b></h3>
              <div className='header'>
                <h6>Applied Human Computer Interaction (COMP719)</h6>
                <h6>Gracyn Green and Richard Anstice</h6>
                <h6>Date: 21/10/2022</h6>
              </div>
            </div>
            <div style={{ padding: '1rem'}}>
              <h5 ><b>Research</b></h5>
              <hr />
              <div style={{marginTop: '1rem'}}>
                <p>
                  We completed a user experience study of users of the Korg Grandstage piano, 
                  an observation-based ethnographic study. We asked people who normally play a 
                  non-digital piano to try this digital instrument. 
                </p>
                <p>
                  We chose this topic because we were interested to see how users of non-digital 
                  devices would adapt/ react to a digital version of a similar device. In many 
                  domains, users switch from analog products to digital products. We wanted to see 
                  how this happened for a digital piano.
                </p>
                <p>
                  Much of the group’s past-experience with ‘user experience’ or ‘product development’ 
                  research was quite formal and structured. We wanted to depart from that. For example, 
                  <i> Measuring the User Experience</i> outlined a range of formal, empirical structures and 
                  scientific tools to gather information (Tullis & Albert, e.g. study design processes
                  at page 15). It's a great resource. However, we chose to see what useful information 
                  could be found without structured methods, speaking with consumers in a very free-style 
                  and unstructured environment. 
                </p>
                <h6><b>Research on observation methods</b></h6>
                <p>
                The introduction to Karen O’Reilly’s book <i>Ethnographic Methods</i> summarises Bronislaw Malinowski’s
                ethnographic methods as (paraphrased): 
                <ul>
                    <li>
                      To describe customs, traditions and institutions of a cultural group,  
                    </li>
                    <li>
                      To give those items flesh and blood by describing daily life, and 
                    </li>
                    <li>
                      "<i>To record typical ways of thinking and feeling associated with the institutions and culture.</i>"
                    </li>
                </ul>
                (O’Reilly, page 8)
                </p>
                <p>
                O’Reilly writes about ethnography in general, not just as-applied to product design. 
                To get useful feedback about the Korg Grandstage piano, we had to collect and understand
                information about the customs, traditions and institutions of a group of people who play 
                the piano. It was not enough to focus on hands on the keyboard – we needed to compare the 
                experience to the pianist’s experiences playing other instruments in their daily life.  
                </p>
                <p>
                O’Reilly introduced us to the concept of a ‘Participant Observer’. She argues that in an 
                ethnographic setting the researchers gathering data must acknowledge that they are participants 
                in the process they are trying to observe (O’Reilly, page 98). This gave us confidence to choose 
                an informal approach: 
                <ul>
                    <li>
                    To ask users to trial the Korg instrument in an unstructured environment. 
                    </li>
                    <li>
                    To have somebody help the pianist to use the digital instrument – even though 
                    we would lose some feedback about how hard it was to find the right buttons, we 
                    could obtain richer data about other elements of the Korg’s design. 
                    </li>
                </ul>
                We felt there was no need for a structured interview or questionnaire – we only needed to follow up 
                at the end asking ‘what did you think’ or similar – just to make sure we didn’t miss any feedback.  
                </p>
                <p>
                Agar considered both formal and informal data gathering. At one point he comments that early in an ethnographic study, 
                the informal interview is the data (Agar, page 140). This contrasts with other approaches that might seek to gather 
                more structured data right from the start.  
                </p>
                <h6><b>Research method</b></h6>
                <p>
                We arranged to meet with 6 people who played either an acoustic piano, or a non-digital electric or 
                organ. We asked them to try out a digital piano, playing for about 15 minutes during a session lasting 
                about half an hour. 
                <ul>
                  <li>
                  To give context, players are asked to expect a slightly more formal version of what would happen 
                  if they went to a piano shop to try an instrument. 
                  </li>
                  <li>
                  We asked them to bring 2-3 short pieces of music that they were comfortable with. 
                  </li>
                  <li>
                  Players are free to ask for help finding buttons and changing settings. 
                  </li>
                  <li>
                  We chose only to take handwritten notes. Because it is about playing music, we felt it was 
                  easier to get volunteers if their playing (and mistakes) was not recorded.  
                  </li>
                </ul>
                </p>
                <h6><b>Results recording</b></h6>
                <p>
                For the purposes of this exercise, there was little benefit in trying to translate the feedback 
                into a mathematical/ weighted model. The data set is too small to show meaningful trends by 
                aggregation.  There was better information for product developers from engaging with what players said.  
                </p>
                <p>
                We collected data using pen and paper notes. We have collated and listed our results under 3 headings 
                “good points”, “bad points” and “observations”. 
                </p>
                <p>
                In our conclusions in relation to data, we compare feedback from players with Ron Norman’s principles 
                of design – <i>Discoverability, Feedback, Conceptual Model, Affordances, Signifiers, Mappings and 
                Constraints</i> (Norman, p. 72). This helped us to relate our data to a more general idea of a 
                ‘good design’. Initially, we had planned to list all our results under these headings, but this 
                approach proved to be too complicated because feedback didn’t fit into neat categories. We did 
                not make audio or visual recordings. We felt recording sound might inhibit some players. 
                </p>
                <p>
                  <b>Strengths</b> of this approach:
                  <ul>
                    <li>
                    Because we did not start with structured surveys or questionnaires, we minimised 
                    the risk that structures would cause bias in the subjects that our players gave feedback on. 
                    </li>
                    <li>
                    Because we helped the player to adjust the settings, we got richer information about how the 
                    player’s conceptual model for music and a piano are fulfilled/ not fulfilled by their experience
                    playing the Korg Grandstage.  
                    </li>
                    <li>
                    Informal approach identifies a wide range of themes – good for understanding the market, and 
                    understanding general groups of users with common needs. This approach is useful for preliminary 
                    product design.  
                    </li>
                  </ul>
                </p>
                <p>
                  <b>Weaknesses</b> of this approach: 
                  <ul>
                    <li>
                    Because we helped the player to adjust the settings, we limited our opportunity to observe how 
                    usable the Korg’s input/output was for new users to learn.  
                    </li>
                    <li>
                    Because we did not summarise our feedback numerically, our approach isn’t very scalable. E.g. 
                    If we had 12 players instead of 6, listing the results as text would be too unwieldy to be 
                    usable for product development. 
                    </li>
                    <li>
                    Informal approach does not deliver systematic and comprehensive information about detailed 
                    product features. I.e. This approach would not be useful to trouble-shoot a User Interface 
                    in depth, to create a near-final version of a prototype. 
                    </li>
                    <li>
                    Because all data is interpreted by researchers from the handwritten notes, there is a risk 
                    that the researchers’ preconceptions are reflected in the notes, rather than the best data 
                    from the players’ feedback. We felt that this was acceptable on balance. 
                    </li>
                  </ul>
                </p>
                <figure style={{ padding: '4px', margin: 'auto', border: '1px solid black', backgroundColor: '#f2f0f0'}}>
                  <img src={require("../images/Image 1.jpg")} alt="Korg piano setup" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%'}}/>
                  <figcaption style={{ padding: '2px', textAlign: 'center'}}>
                    Figure 1: The Korg Grandstage as-setup for all 6 players. The sound output was from the two silver speakers located behind the Korg.
                  </figcaption>
                </figure>
                <br/>
                <h6><b>Research process for each player</b></h6>
                <ol>
                  <li>
                  We completed the form signing. 
                  </li>
                  <li>
                  We asked a couple of questions about the
                  player’s instruments that they play regularly, 
                  and number of years’ experience playing piano. 
                  </li>
                  <li>
                  We asked the player to sit at the piano. The piano 
                  is already turned on and set to grand piano. 
                  </li>
                  <li>
                  The player played several songs. The player was free 
                  to stop and to make changes or ask us to make changes to the instrument.  
                  </li>
                  <li>
                  At the end we asked a couple of broad open-ended questions. 
                  “So what did you think?” or “How did that go?”  
                  </li>
                  <li>
                  Recording: during this session we sat to one side of the player and took notes on paper. 
                  </li>
                </ol>
              </div>
            </div>
            <br />
            <div style={{ padding: '1rem'}}>
              <h5><b>Usability: Results</b></h5>
              <hr />
              <p style={{marginTop: '1rem'}}><b>Note:</b> The discussion of results has a lot of discussion about the ‘action’ of the keyboard. 
              This refers to the feel of the keys for a player. On an acoustic piano, the key is connected to a long lever, 
              with a hinged action to strike the piano string. The pianist feels the movement of this wait as feedback, and 
              adjusts their playing in response. The Korg tries to emulate this weighted lever using a shorter lever, with a 
              heavier weight placed closer to the keys. This means that physically, the Korg is trying to use a different 
              mechanism to emulate the feel of an acoustic piano. <b>Note also:</b> an electronic organ does not have a weighted 
              action, but instead each key is a simple spring-loaded switch. This means that any weighted action on any 
              piano has a different feel to an organ. 
              </p>
              <p>
              We had really good sessions with each of our 6 players. All of our players had 50+ years’ of experience playing piano. 
              Regardless of their views on the instrument, each of the pianists was able to play well (from an audience perspective).   
              </p> 
              <h6><b>Results Good points:</b></h6>
              <div style={{marginLeft: '1.5rem'}}>
                <p>
                  <b>Action of the keyboard is better than previous electric instruments.</b> All 6 pianists commented that the action of 
                  the Korg was better than the action on digital/ electric pianos that they had used in the past. One pianist commented 
                  that while she could feel it wasn’t a piano action, it was the first digital that she had played that she could relate 
                  to the action of her piano.  
                </p>
                <p>
                  <b>Action is a reasonable substitute for an organ action,</b> even though that is a secondary design feature for the 
                  Korg. To make the instrument playable for the 2 players who had organ music, we turned the keyboard to its most sensitive
                  setting. Surprisingly, both players commented that they regularly played organs with much stiffer actions than the Korg’s 
                  action. We had not expected the Korg to be pleasant for organists to play (compared to an organ action).  
                </p>
                <p>
                  <b>Sound:</b>  Users often diagnosed issues/ concerns from the sound of the piano, by ear. It is worth noting that 
                  subconsciously all players accepted that it was a ‘piano’ sound by-and-large. Even if the pianist didn’t like an 
                  aspect of the sound, they reacted to a ‘piano’ sound. This suggests that the Korg instrument has done one basic
                  job well – the sound recordings that the instrument uses to produce sounds are good enough that many users will 
                  accept them. It is a ‘piano’ sound – not an ‘electric piano’ sound.  
                </p>
                <p>
                  <b>Ergonomic layout </b> – the switches and buttons are separated from the keyboard. One user complemented the design 
                  which has 2cm of plain plastic around the keyboard. This separates the musical keyboard from the other controls. 
                  He contrasted this with an organ he plays that has the pre-set buttons located right next to the keyboard – if 
                  he bumps a pre-set while reaching up to turn the page on his music, the sound in the organ cuts out mid-song. 
                  (After preparing this paper, one author went back to the music shop where the Korg was purchased – there was a new 
                  model of a different brand with exactly this layout problem.) 
                </p>
                <p>
                  <b>Users responded to changes in the sensitivity of the keyboard.</b> Where a user said that the keyboard was not 
                  loud enough, or not expressive enough, we changed the sensitivity settings. This usually helped the pianist to get 
                  the sound they wanted.  
                </p>
                <p>
                  <b>Users were happy to pick between a range of instruments</b> – 4 users tried different sounds, including grand pianos, 
                  upright pianos, organs and strings. 
                </p>
                <p>
                  <b>Users who tried to use the buttons themselves were able to start using the instrument without having to ask.</b> The 
                  controls to change the instrument are grouped around the screen which names the current instrument. Other controls like 
                  the equalizer and the reverb are laid out in a row across the instrument in groups. Each group of controls has an on/off
                  button that lights up red to show that that feature is activated (e.g. the equalizer). Several of the players used these 
                  features themselves. Further, the lighting and layout of controls told some basic information about what the instrument did, 
                  even to users who didn’t choose to use the controls themselves.
                </p>
                <p>
                  <b>Common keyboard action between instruments.</b>  One pianist had been a teacher for many years. She appreciated that Korg 
                  put the same action in multiple instruments – a student could start on a $1,200 instrument, and it would have common feel with 
                  a more expensive instrument.
                </p>
              </div>
              <br />
              <h6><b>Results Bad points:</b></h6>
              <div style={{marginLeft: '1.5rem'}}>
                <p>
                  <b>Action on keyboard lacking subtlety – </b> The action on the Korg has some big limitations. One player was frustrated at the 
                  lack of sensitivity when playing very softly. Another player commented that they could feel the long lever wasn’t there behind 
                  the piano key. Overall, the players felt that they would get much better feedback and control from an acoustic keyboard.  
                </p>
                <p>
                  <b>Sound quality –</b> balance of treble and bass, harshness of treble, lack of subtlety.
                </p>
                <p>
                  <b>Sound quality – </b> sound is very direct, whereas on an acoustic piano the sound tends to be more ambient. This is an 
                  impression from one of the authors as an observer, not a comment from the players. The sound from the Korg came from 2 loudspeakers. 
                  Loudspeakers are very direct. This contrasts with the sound from an acoustic piano – because the sound is made inside the body of 
                  the piano, it is much more indirect and ambient, especially for the player at the keyboard. It seems possible that this difference 
                  made the sound of the Korg seem particularly unusual.  
                </p>
                <p>
                  <b>Limited functionality with organ sounds.</b> The Korg had limited usefulness as an organ because of limits in how the organ 
                  sounds were recorded. The organ sounds were not adjustable – they had all been recorded to be quite bass-heavy. This meant that 
                  the organ sounds were quite messy and muddy. The equalizer could improve the sound, but was not a complete fix. This meant that 
                  the Korg wouldn’t really be suitable to play a lot of dedicated organ music.  
                </p>
                <p>
                  <b>Short 73-key action.</b> Several of the players ran out of bass notes, because this Korg instrument has only a short 73 key action. 
                  (The Korg Grandstage is available as an 88 key model). 
                </p>
                <p>
                  <b>Fast release on keyboard:</b> The ‘release’ of a musical instrument is a measure of how much time it takes for a note to fall silent 
                  after the player has stopped playing that note. One player noticed that the release on the Korg seemed very quick. This is not adjustable 
                  on the Korg, whereas it can be adjusted on many acoustic pianos during tuning. 
                </p>
                <br />
              </div>
              <h6><b>Neutral Observations:</b></h6>
              <div style={{marginLeft: '1.5rem'}}>
                <p>
                  <b>Ergonomics and the ‘ritual’ of sitting down to play is different:</b> On an acoustic piano the pedals, keyboard height and music stand 
                  height are fixed. In contrast, on the Korg the user has to check these and change the layout to be comfortable. One of our users raised 
                  the level of the music stand. One of the users noticed that the stand was further back than they were used to – they had to move forward 
                  a piece of music that was printed small.   
                </p>
                <p>
                  <b>Electronic Instruments seen as a necessary evil:</b> All 6 pianists saw digital instruments as something they had to tolerate as musicians, 
                  rather than as enjoyable instruments to play. Overall, while this Korg was seen as a better option than past digitals, it still couldn’t replace 
                  or replicate the look and feel of a ‘real’ piano. 
                </p>
              </div>
            </div>
            <br />
            <div style={{ padding: '1rem'}}>
              <h5><b>Conclusions - relative to Norman's 7 points</b></h5>
              <hr />
              <p style={{marginTop: '1rem'}}>
                <b>Discoverability</b><br />
                <div style={{marginLeft: '1.5rem'}}>
                The core features were easy to find – the keyboard, pedal, music stand etc. <br /><br />
                The lighting and layout of the panel gave some guidance for users to start using more of the features unassisted.
                </div>
              </p>
              <p>
                <b>Feedback</b> <br />
                <div style={{marginLeft: '1.5rem'}}>
                The main source of feedback discussed was the touch of the keyboard. This was seen by users on the Korg as different 
                from an acoustic, and not of the same quality. We got specific responses from players about the limited range of feedback 
                (e.g. when playing softly).  
                <br /><br />
                The feedback from the sound was good. Even where users wanted more/less treble or other adjustments, they could identify what 
                they wanted clearly from the sound of the instrument.  
                <br /><br />
                The lights and screens were useful to help guide users around the controls.
                </div>  
              </p>
              <p>
                <b>Conceptual Model</b><br />
                <div style={{marginLeft: '1.5rem'}}>
                The Korg seemed to work as a ‘piano’ from the players' perspective, but with some differences. The most obvious is the 
                physical difference when starting to play – e.g. there is a need to adjust the pedal, the music stand and the volume of the instrument.
                <br /><br />
                Overall, when talking to players we were able to have rich discussions about features of the sound and how that affected the music that 
                players played. This suggests that the Korg’s design fits well with the shared model/ language of music that all musicians must share.  
                </div>
              </p>
              <p>
                <b>Affordances</b><br />
                <div style={{marginLeft: '1.5rem'}}>
                All 6 users were afforded a reasonably-functioning piano. The results discussed above highlight the limits of this in terms of sound 
                quality, and sensitivity. 
                <br /><br />
                The 2 organ players were afforded an organ keyboard that was ok, but with organ sounds that sounded quite limited. It would be only 
                an organ of last-resort.  
                <br /><br />
                While the players were aware of some of the other options for different sounds, there wasn’t a lot of interest in trying these new features. 
                There was an awareness of other possible features, but our players were mostly focussed on using the Korg as a piano/ organ.  
                </div>
              </p>
              <p>
                <b>Signifiers, Mappings and Constraints</b><br />
                <div style={{marginLeft: '1.5rem'}}>
                When using the keys and the controls, there were no major issues with users identifying/ orienting themselves to use the Korg as a piano. 
                The keyboard, stand and bench look different from other instruments, but it is clear what job they do.  Even for players who chose not to 
                use the other buttons and controls, those controls were all placed in a separate location on the device from the keyboard – it was clear 
                to users that they could leave these alone, and the piano would keep working.  
                <br /><br />
                All of the input and output devices on the Korg are imitations of their analog equivalents (the keyboard, the pedal).  
                <br /><br />
                One area where it was harder for users to map the Korg’s features against their own experience was the sound from the loudspeakers. 
                The number of queries about sound quality suggest the sound was simply quite different from that of a piano.  
                </div>
              </p>
            </div>
            <br />
            <div style={{marginLeft: '1.5rem'}}>
            <h5><b>Overall Conclusion and Discussion</b></h5>
              <hr />
              <p>
              The results of the study we conducted show that the Korg electronic keyboard is adaptable enough for regular acoustic piano players 
              to be able to produce music. It has shown to produce a high quality of sound to represent a piano (as the most basic use case). 
              The participants of the study had a rich background in music, which is who this product is targeted towards. It is important to note 
              that not all the functionalities of the keyboard were used during the study by the participants, either there were too many options for 
              just the base purpose of playing the instrument or that the average potential user does not have the need for more complex computerised functions. 
              This can be something for future study, if all the options on the keyboard are being used by the average user of the product. While that would have 
              been beyond the scope and point of our observation-based ethnographic study, it is an interesting finding that came from it. 
              </p>
              <br />
            </div>
        </section>
      </div>
    )
  }
}