import React, { Component } from 'react';
import './main.css';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, InputGroupProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class search extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { search } = this.props;
    if(search) { //검색 입력값 가져오기
      document.getElementsByName('search')[0].value = search
    }

    return (
        <div>
            <form>
              <input type='text' maxLength='20' className='search_input' name='search' placeholder='환자이름을 입력하시오'/>
              <Button type='submit' className='serach_submit' size="sm" variant="light">검색</Button>
            </form>
        </div>
    );
  }
}

export default search;


