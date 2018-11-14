/**
 * Parent App component
 */

import React, { Component } from 'react';
import '../assets/App.css';
import Test from './styled/Test';

class App extends Component {
  render() {
    return (
      <div>
        <Test>Test</Test>
      </div>
    );
  }
}

export default App;