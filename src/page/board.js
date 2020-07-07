import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, InputGroupProps, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import boardinfo from '../image/patientboardinfo.PNG';
class board extends Component {
  constructor(props) {
    super(props)
    this.state ={
      patientid_board : "",
      patientname_board : "",
      contents : ""
  }
  }

  _submitBoard = async function() {
    const patientid_board = document.getElementsByName('patientid_board')[0].value.trim();
    const patientname_board = document.getElementsByName('patientname_board')[0].value.trim();
    const contents = document.getElementsByName('contents')[0].value.trim();
    // 각 입력 칸이 비어있을때 입력버튼 눌렀으면
    if(patientid_board === "" ){ 
        return alert('환자 번호를 입력하시오.');
    }else if(patientname_board === ""){
        return alert('환자 아이디를 입력하시오.');
    }else if(contents === ""){
        return alert('복용 약 이름을 입력하시오.');
    }
    // 각 데이터 입력값 할당 
    const data = { patient_id : patientid_board, patientname : patientname_board, contents : contents};
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
        width='250'
        className="boardinfo"/>
      <div className="Write">
        <InputGroup>
        <FormControl
         type='text'
         name='patientid_board'
         id='patient_id_board'
         width = "100px"
        placeholder="보낼 환자 번호"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
        </InputGroup>  
        
        <InputGroup>
        <FormControl
         type='text'
         name='patientname_board'
         id='patient_name_board'
         width = "100px"
        placeholder="보낼 환자 ID"
        aria-label="Username"
        aria-describedby="basic-addon1"
        />
        </InputGroup>  

        <InputGroup>
        <FormControl as="textarea" id='content_txt' name='contents' placeholder="내용을 입력하세요." />
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