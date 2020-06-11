import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Home, Write, Signup, Board, List } from './index.js';
import './main.css';

class main extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        

        <div className='Mains'>
            <div id='Mains-left'>
            </div>
            <div>
                <Route path='/' component={Home} exact />
                <Route path='/write' component={Write} />
                <Route path='/signup' component={Signup} />
                <Route path='/board' component={Board} />
                <Route path='/list' component={List} />

            </div>
            <div id='Mains-right'>
                
            </div>
        </div>
      </div>
        
    );
  }
}

export default main;

