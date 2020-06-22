import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
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
    
    if(patientid_board === "" ){
        return alert('환자 번호를 입력하시오.');
    }else if(patientname_board === ""){
        return alert('환자 아이디를 입력하시오.');
    }else if(contents === ""){
        return alert('복용 약 이름을 입력하시오.');
    }
    const data = { patient_id : patientid_board, patientname : patientname_board, contents : contents};
    const res = await axios ('/add/board',{
      method: 'POST',
      data : data,
      headers : new Headers()
  })
  if(res.data){
    alert('게시판 등록이 완료되었습니다');
    return window.location.replace('/');
  }
  
}

  render() {

    return (
      <div className="Write">
            
        <div>
          <input type='text' name='patientid_board' id='patient_id_board' placeholder="보낼 환자 번호"/>
        </div>

        <div>
          <input type='text' name='patientname_board' id='patient_name_board' placeholder="보낼 환자 아이디"/>
        </div>

        <div>
          <textarea id='content_txt' name='contents' placeholder="내용을 입력하세요."></textarea>
        </div>

        <div id='post_submit'>
            <button onClick={() => this._submitBoard()}><h3>등록</h3></button>
          </div>


      </div>
    );
  }
}

export default board;