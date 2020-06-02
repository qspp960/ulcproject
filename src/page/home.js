import React, { Component } from 'react';
import imgscreen from './mainscreen.PNG';
import './main.css';
class home extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div>
          <div className="acenter">
            <img src = {imgscreen}></img>
          </div>
        </div>
    );
  }
}

export default home;


