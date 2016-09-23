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
            <hr/>
            <h3>Contact us</h3>
            <p>David Tschida, President <a href='mailto:dt+sigapp@purdue.edu'>email</a></p>
          </div>
          <div className='col-sm-2 sidenav'>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
