import React from 'react';
import Header from './Header';
import Footer from './Footer'
import TutorialEntry from './TutorialEntry'
import '../css/home.css';
import driveLogo from '../images/gdrive256.png';
import slackLogo from '../images/slack256.png';
import facebookLogo from '../images/facebook256.png';
import githubLogo from '../images/github256.png';
import laundryIcon from '../images/laundryicon.png';
import playBadge from '../images/playbadge.png';

const Home = (props) => {
  return (
      <div>
        <Header />
        <div className='container text-center'>
          <div className='row content'>
            <div className='col-sm-12 text-left'>
              <div className="row">
                <div className="col-sm-12">
                  <h1>Welcome</h1>
                  <p>Sigapp stands for the Special Interest Group in Applied Computing.
                    Though traditionally we have been dedicated to full stack Android development.
                    Our goal is to give students opportunities to improve Purdue through
                    software development.</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <h2>Tutorials</h2>
                  <table className="table">
                    <caption>Meeting schedule and past tutorials: content for most tutorials can be found in our Google Drive.</caption>
                    <thead>
                      <tr>
                        <th className="col-xs-2">Date</th>
                        <th>Name</th>
                        <th className="col-xs-1">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TutorialEntry date="09/20/2016" name="Intro to Sigapp" link="https://docs.google.com/presentation/d/1hqAYyQq97wLq10yV3mApBfuyhXOmUAOS4i3g-zZV3io/edit?usp=sharing"/>
                      <TutorialEntry date="09/22/2016" name="Git Presentation" link=""/>
                      <TutorialEntry date="09/27/2016" name="Pre-Android Prep" link=""/>
                      <TutorialEntry date="09/27/2016" name="Intro to Android" link=""/>
                      <TutorialEntry date="09/29/2016" name="Android: User Input and Text Boxes" link=""/>
                      <TutorialEntry date="10/04/2016" name="Android: RecyclerView" link=""/>
                      <TutorialEntry date="10/06/2016" name="Node Preparation" link=""/>
                      <TutorialEntry date="10/11/2016" name="CANCELED (Hello World Hack)" link=""/>
                      <TutorialEntry date="10/13/2016" name="CANCELED (Hello World Hack)" link=""/>
                      <TutorialEntry date="10/14/2016" name="Hello World Tutorial: Android + APIs" link="https://www.gitbook.com/book/vidia/hello-android/details"/>
                      <TutorialEntry date="10/14/2016" name="Hello World Tutorial: Node.js + APIs" link="https://jwlehman93.gitbooks.io/hello-world-server/content/"/>
                      <TutorialEntry date="10/18/2016" name="Retrofit and APIs" link=""/>
                      <TutorialEntry date="10/20/2016" name="Project Brainstorming" link=""/>
                      <TutorialEntry date="10/25/2016" name="Project Planning" link=""/>
                      <TutorialEntry date="10/27/2016" name="Feature Lists" link=""/>
                      <TutorialEntry date="11/01/2016" name="Adding users to the app" link=""/>
                      <TutorialEntry date="11/03/2016" name="Users and authentication in Node.js" link=""/>
                      <TutorialEntry date="11/08/2016" name="Rooms and Token Auth" link=""/>
                      <TutorialEntry date="11/10/2016" name="Project Work Day" link=""/>
                      <TutorialEntry date="11/15/2016" name="CANCELED" link=""/>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12"><h2>Relevant Links</h2></div>
                <div className="col-xs-3">
                  <div className="thumbnail">
                    <img alt="Google Drive Logo" className="img-responsive" src={driveLogo}/>
                    <div className="caption-full">
                      <a href='https://drive.google.com/drive/folders/0ByBsXZAwFI0qSzY4NGFWeUZqeEU'>
                        <h4>Tutorials in our Google Drive Folder</h4>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-3">
                  <div className="thumbnail">
                    <img alt="Slack Logo" className="img-responsive" src={slackLogo}/>
                    <div className="caption-full">
                      <a href='https://acm-sigapp-heroku-slack.herokuapp.com/'>
                        <h4>Join our Slack</h4>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-3">
                  <div className="thumbnail">
                    <img alt="Facebook Logo" className="img-responsive" src={facebookLogo}/>
                    <div className="caption-full">
                      <a href='https://www.facebook.com/groups/PurdueACMSigApp/'>
                        <h4>Facebook Group</h4>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-3">
                  <div className="thumbnail">
                    <img alt="Github Logo" className="img-responsive" src={githubLogo}/>
                    <div className="caption-full">
                      <a href='https://github.com/Purdue-ACM-SIGAPP'>
                        <h4>Our projects on Github</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <h2>Contact us</h2>
                  <p>David Tschida, President <a href='mailto:dt+sigapp@purdue.edu'>email</a></p>
                  <p>Jeff Hughes, Vice President</p>
                  <p>Michael Vieck, Vice President</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <h2>Our projects</h2>
                </div>
                <div className="col-xs-3">
                  <img alt="Purdue Laundry Android Icon" className="img-responsive" src={laundryIcon}/>
                  <h4>Purdue Laundry App</h4>
                  <p>
                    The Purdue Laundry app shows the details
                    of your dorm's laundry room in the palm of
                    your hand! You can even set timers for
                    each machine you are using to be alerted
                    when they are done.</p>
                  <a href='https://play.google.com/store/apps/details?id=xyz.jhughes.laundry&hl=en&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img alt='Get it on Google Play' className="img-responsive" src={playBadge}/>
                  </a>
                  <a href="https://github.com/Purdue-ACM-SIGAPP/PurdueLaundry">Github</a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="row content">
                    <div className="col-sm-4">
                      <h4>Meeting Schedule</h4>
                      <p>
                        We meet every Tuesday and Thursday in Lawson Hall room B148.
                        Most meetings consist of tutorials on topics related to
                        Android and server development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" src="https://calendar.google.com/calendar/embed?src=3saj71dvb58gl7hh2bl3g10d08%40group.calendar.google.com&ctz=America/New_York" style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      )
}

export default Home;
