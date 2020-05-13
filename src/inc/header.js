import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../App.css';
class header extends Component {

  render() {

    return (
        <div class='header_grid'>
            <div> </div>
            <div className='acenter'>
                <Route path='/'/>
                <Link className='link_tit' to='/'> <h3> ID's 구급상자 로봇 </h3> </Link>
            </div>

            <div className='acenter'> 
                <h5> LOGIN </h5>
            </div>
        </div>
    );
  }
}

export default header;


