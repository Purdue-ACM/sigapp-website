import React from 'react';
import FacebookLogo from '../images/facebook.svg';
import GithubLogo from '../images/github.svg';
import SlackLogo from '../images/slack.svg';
import '../socialBar.css';

const SocialBar = (props) => {
  return (
    <ul className='nav navbar-nav navbar-right'>
      <li className='facebook'><a href='https://www.facebook.com/groups/PurdueACMSigApp/'><img src={FacebookLogo} height='16px' width='16px' alt='Facebook' /></a></li>
      <li className='slack'><a href='https://purdueacmsigapp.slack.com/'><img src={SlackLogo} height='16px' width='16px' alt='Slack' /></a></li>
      <li className='github'><a href='https://github.com/Purdue-ACM-Sigapp'><img src={GithubLogo} height='24px' width='24px' alt='GitHub' /></a></li>
    </ul>

  )
}

export default SocialBar;
