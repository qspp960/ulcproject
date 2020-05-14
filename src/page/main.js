import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Home, Write } from './index.js';
import './main.css';
class main extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div className='Mains'>
            <div id='Mains-left'>
                <h3> LEFT SIDE </h3>
            </div>
            <div>
                <Route path='/' component={Home} exact />
                <Route path='/write' component={Write} />
            </div>
            <div id='Mains-right'>
                <h3> RIGHT SIDE </h3>
            </div>
        </div>
    );
  }
}

export default main;

