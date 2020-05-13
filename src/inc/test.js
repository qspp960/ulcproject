/* src/inc/test.js */

import React, { Component } from 'react';
import queryString from 'query-string';
class test extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
    }

  
    render() {
        const qry = queryString.parse(this.props.location.search);
    return (
        <div>
            <h3> this is params's data : {qry.data1} </h3>
        </div>
    );
  }
}

export default test;
