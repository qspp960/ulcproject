import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import listtitle from '../image/listtitle.PNG';
class view extends Component {
  constructor(props) {
    super(props)
    this.state={
      data : [], //서버로부터 받아온 데이터를 저장

    }
  }
  componentDidMount() {
    this._getData()
  }

  _getData = async function() {
    const board_id = this.props.match.params.data;

    const getData = await axios('/get/board_data', {
      method : 'POST',
      headers: new Headers(),
      data : { id : board_id }
    });

    console.log(getData);

    return this.setState({ data : getData });

  }

  render() { 
    const { data } = this.state;
  
     return (
      <div className='Write'>
      
      {data.data 
      ? <div>

          <div className='top_title'>
            <input type='text' id='title_txt' name='title' defaultValue={data.data.data[0].title} readOnly/>

            <div className='date_div'>
            </div>
          </div>
          
          <div>
            <textarea id='content_txt1' name='contents' defaultValue={data.data.data[0].contents} readOnly></textarea>
          </div>
        </div>
      : null}
    </div>
    );
  }
}

export default view;


