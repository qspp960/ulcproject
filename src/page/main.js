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
              <h5 align="center"> <Link to='/write'>환자 데이터 입력</Link></h5> 
            </div>
            <div>
                <Route path='/' component={Home} exact />
                <Route path='/write' component={Write} />
            </div>
            <div id='Mains-right'>
                <h3> 오른쪽.. 해당 사용자 정보 출력할 생각 </h3>
            </div>
        </div>
    );
  }
}

export default main;

