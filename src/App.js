
import React, { Component } from 'react';
import { Main } from './page/index.js';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import { Head } from './inc'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
    <div>
      <div>
        <Head />
      </div>
      <div>
        <Main />
      </div>
    </div>
    )
  }
}

export default App;

