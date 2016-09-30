import React, { PropTypes, Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TutorialList from '../components/TutorialList';

class TutorialContainer extends Component {
  render() {
    return (
      <div>
        <Header active='tutorials' />
        <TutorialList />
        <Footer />
      </div>
    );
  }
}

export default TutorialContainer;
