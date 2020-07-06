import React, { Component } from 'react';
import './main.css';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, InputGroupProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class write extends Component {
  constructor(props) {
    super(props)
    this.state ={
        patient_id : "",
        patientname : "",
        medName : "",
        medTime: "",
    }
  }

  _submitwrite = async function() {
    const patient_id = document.getElementsByName('patient_id')[0].value.trim();
    const patientname = document.getElementsByName('patientname')[0].value.trim();
    const medName = document.getElementsByName('medName')[0].value.trim();
    const medTime = document.getElementsByName('medTime')[0].value.trim();
    if(patient_id === "" ){
        return alert('환자 번호를 입력하시오.');
    }else if(patientname === ""){
        return alert('환자 이름을 입력하시오.');
    }else if(medName === ""){
        return alert('복용 약 이름을 입력하시오.');
    }else if(medTime === ""){
      return alert('약 복용 주기를 입력하시오.');
  }
  const data = { patient_id : patient_id, patientname : patientname, medName : medName, medTime : medTime};
  const res = await axios ('/add/timesetting',{ // 입력한 환자 번호, 이름, 약이름, 주기 전송하여 DB 입력
      method: 'POST',
      data : data,
      headers : new Headers()
  })
  if (res.data) {
      alert('등록 완료');
      return window.location.replace('/');
  }
}


  render() {

    return (
        <div className="Write">
          <InputGroup>
          <FormControl
            type='text'
            name='patient_id'
            id='patient_id'
            width = "100px"
            placeholder="환자 번호"
            
            />
            </InputGroup>

            <InputGroup>
            <FormControl
            type='text'
            name='patientname'
            id='patientname'
            width = "100px"
            placeholder="환자 이름"
            
            />
            </InputGroup>

            <InputGroup>
            <FormControl
            type='text'
            name='medName'
            id='medName'
            width = "100px"
            placeholder="복용 약 이름"
           
            />
            </InputGroup>    
          
            <InputGroup>
            <FormControl
            type='text'
            name='medTime'
            id='medTime'
            width = "100px"
            placeholder="복용 약 주기"
           
            />
            </InputGroup>   

          <div id='post_submit'>
            <Button variant="light" onClick={() => this._submitwrite()}>등록</Button>
          </div>

        </div>
    );
  }
}

export default write;


