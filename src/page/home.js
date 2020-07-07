import React, { Component } from 'react';
import imgscreen from '../image/title.png';
import imgscreen1 from '../image/img1.PNG';
import imgscreen2 from '../image/title2.PNG';
import imgscreen5 from '../image/title3.PNG';
import imgscreen3 from '../image/doctor1.png';
import imgscreen4 from '../image/doctor2.png';
import imgscreen6 from '../image/title4.PNG';

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

      <Carousel className="mainpadding">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgscreen6}
          width="300"
          height="300"
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgscreen2}
          width="300"
          height="300"
          alt="Second slide"
        />
  
      </Carousel.Item>
    
    </Carousel>

<Jumbotron>
<h1>ID's Caring Robot</h1>
<p>
  완화 치료 센터 병원 관계자만 사용 가능합니다.
  회원가입 후관리자 승인이 완료되면 사용 가능합니다.
</p>
<p>
  <Button variant="secondary">관리자 문의하기</Button>
</p>
</Jumbotron>
</div>


    );
  }
}

export default home;


