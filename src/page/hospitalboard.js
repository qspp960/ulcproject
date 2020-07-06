import React, { Component } from 'react';
import './main.css';
import { SearchPatient } from './index.js';
import axios from 'axios';
import queryString from 'query-string';


class info extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data : [],
        page : 1, //1장에
        limit : 7, //7 튜플이 최대 출력
        all_page : [],
        search : "",
      }
    }
  

  }
  
  export default HospitalBoard;
  
  
  