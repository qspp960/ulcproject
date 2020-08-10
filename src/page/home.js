import React, { Component } from 'react';
import main1 from '../image/main6.PNG';
import main2 from '../image/main5.PNG';
import medq from '../image/medq.png';
import medwater from '../image/medwater.png';

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
          src={main1}
          height="100"
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={main2}
          height="100"
          alt="Second slide"
        />
  
      </Carousel.Item>
    
    </Carousel>

    <img
          className="d-block w-100"
          src={medq}
          height="400"

        />
  



<Jumbotron>
<h1>ID's Health service</h1>
<p>
  본 홈페이지는 올바른 약 복용을 장려합니다.
</p>
<p>
  <Button variant="info">관리자 문의하기</Button>
</p>
</Jumbotron>
</div>


    );
  }
}

export default home;


