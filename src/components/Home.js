import React from 'react';
import Header from './Header';
import Footer from './Footer'

const Home = (props) => {
  return (
    <div>
      <Header />
      <div className='container-fluid text-center'>
        <div className='row content'>
          <div className='col-sm-2 sidenav'>
          </div>
          <div className='col-sm-8 text-left'>
            <h1>Welcome</h1>
            <p>This site is under construction.</p>
            <hr />
            <h3>Relevant links</h3>
            <p>Check out tutorials and other info in our <a href='https://drive.google.com/drive/folders/0ByBsXZAwFI0qSzY4NGFWeUZqeEU'>Google Drive folder</a></p>
            <p>Come <a href='https://acm-sigapp-heroku-slack.herokuapp.com/'>join us on slack</a></p>
            <hr/>
            <h3>Contact us</h3>
            <p>David Tschida, President <a href='mailto:dt+sigapp@purdue.edu'>email</a></p>
            <p>Jeff Hughes, Vice President</p>
            <p>Michael Vieck, Vice President</p>
          </div>
          <iframe src="https://calendar.google.com/calendar/embed?src=3saj71dvb58gl7hh2bl3g10d08%40group.calendar.google.com&ctz=America/New_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
          <div className='col-sm-2 sidenav'>
            <h4>Purdue Laundry App</h4>
            <p>Tired of having to go to the laundry room, only to find out that
            there's no space available? The Purdue Laundry app solves that by
            having all the details of your dorm's laundry room in the palm of
            your hand! You can even set timers for each machine you are using
            to be alerted when they are done.</p>
            <a href='https://play.google.com/store/apps/details?id=xyz.jhughes.laundry&hl=en&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
