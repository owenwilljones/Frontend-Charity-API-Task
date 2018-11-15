/**
 * Parent App component
 */

import React, { Component } from 'react';
import '../assets/App.css';
import DonationList from './DonationList';

class App extends Component {
  render() {
    return (
      <div>
        <DonationList />
      </div>
    );
  }
}

export default App;