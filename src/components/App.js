/**
 * Parent App component
 */

import React, { Component } from 'react';
import '../assets/App.css';
import DonationList from './DonationList';
import PageHeader from './styled/Page/PageHeader';
import PageTitle from './styled/Page/PageTitle';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          <PageTitle>Latest Donations</PageTitle>
        </PageHeader>
        <DonationList />
      </div>
    );
  }
}

export default App;