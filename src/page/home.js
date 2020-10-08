import React, { Component } from 'react';
import mainlogo from '../image/mainlogo.PNG';
import './main.css';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, CarouselProps, CarouselItem, Carousel, Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class home extends Component {
  constructor(props) {
    super(props)
  }

  render() {//메인화면 이미지 출력

    return (
      <div>
        <img className="mainpadding" width="800" height="350" src={mainlogo}></img>

      </div>


    );
  }
}

export default home;


