import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Home, Write, Signup } from './index.js';
import { Right_Write } from './right/index.js';
import './main.css';
import patientinfo from '../image/infomenu.PNG';
import datainsert from '../image/datainsertmenu.PNG';
import patientstatemenu from '../image/patientstatemenu.PNG';
import datamenu from '../image/datamenu.PNG';
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
            </div>
            <div id='Mains-right'>
                <Route path='/write' component={Right_Write} />
            </div>
        </div>
      </div>
        
    );
  }
}

export default main;

