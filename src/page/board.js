import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import listtitle from '../image/listtitle.PNG';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, InputGroupProps, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import boardinfo from '../image/boardtitle.PNG';
class board extends Component {
  constructor(props) {
    super(props)
    this.state ={
      patientid_board : "",
      patientname_board : "",
      contents_txt : ""
  }
  }

  _submitBoard = async function() {
    const title_board = document.getElementsByName('title_board')[0].value.trim();
    const name_board = document.getElementsByName('name_board')[0].value.trim();
    const contents_txt = document.getElementsByName('contents_txt')[0].value.trim();
    // 각 입력 칸이 비어있을때 입력버튼 눌렀으면
    if(title_board === "" ){ 
        return alert('제목을 입력하시오.');
    }else if(name_board === ""){
        return alert('작성자를 입력하시오.');
    }else if(contents_txt === ""){
        return alert('내용을 입력하시오.');
    }
    // 각 데이터 입력값 할당 
    const data = { title_board : title_board, name_board : name_board, contents_txt : contents_txt};
    const res = await axios ('/add/board',{ //데이터베이스 삽입 요청
      method: 'POST', 
      data : data,
      headers : new Headers()
  })
  if(res.data){ //삽입 확인 
    alert('게시판 등록이 완료되었습니다');
    return window.location.replace('/'); //메인화면으로 복귀
  }
  
}

  render() {

    return (
      <div>
        <img src = {boardinfo}
        width='160'
        className="boardinfo"/>
      <div className="Write">
        <InputGroup>
        <FormControl
         type='text'
         name='title_board'
         id='_title_board'
         width = "100px"
        placeholder="제목"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
        </InputGroup>  
        <InputGroup>

        <FormControl
         type='text'
         name='name_board'
         id='_name_board'
         width = "100px"
        placeholder="작성자"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
        </InputGroup>  


        <InputGroup>
        <FormControl as="textarea" id='_contents_txt' name='contents_txt' placeholder="내용을 입력하세요." />
        </InputGroup>
        
        

        <div id='post_submit'>
        <Button variant="light" onClick={() => this._submitBoard()}>등록</Button>
          </div>


      </div>
      </div>
    );
  }
}

export default board;