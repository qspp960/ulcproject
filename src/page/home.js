import React, { Component } from 'react';
import imgscreen from '../image/title.png';
import imgscreen1 from '../image/img1.PNG';
import imgscreen2 from '../image/title1.PNG';
import imgscreen3 from '../image/doctor1.png';
import imgscreen4 from '../image/doctor2.png';

import './main.css';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, CarouselProps, CarouselItem, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class home extends Component {
  constructor(props) {
    super(props)
  }

  render() {//메인화면 이미지 출력

    return (
      <Carousel className="mainpadding">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgscreen3}
          width="300"
          height="300"
          alt="First slide"
        />
    
        <Carousel.Caption>
          <h3><font color="gray">ID's 구급상자 로봇</font></h3>
          <p><font color="lightgray">본 홈페이지는 병원관계자만 사용 가능합니다.</font></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgscreen4}
          height="300px"
          width="300"
          height="300"
          alt="Second slide"
        />
    
        <Carousel.Caption>
        <Carousel.Caption>
          <h3><font color="gray">ID's Caring Robot</font></h3>
          <p><font color="lightgray">This homepage is only for hospital staff</font></p>
        </Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

export default home;


