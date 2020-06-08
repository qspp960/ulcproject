import React, { Component } from 'react';
import './main.css';
import axios from 'axios';

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

  _submitBoard = async function() {
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
  const res = await axios ('/add/timesetting',{
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
            
          <div>
              <h2>환자 번호</h2>
              <input type='text' name='patient_id' id='patient_id'/>
          </div>

          <div>
              <h2>환자 이름</h2>
              <input type='text' name='patientname' id='patientname'/>
          </div>

          <div>
              <h2>복용 약 이름</h2>
              <input type='text' name='medName' id='medName'/>
          </div>

          <div>
              <h2>복용 약 주기</h2>
              <input type='text' name='medTime' id='medTime'/>
          </div>

          <div id='post_submit'>
            <button onClick={() => this._submitBoard()}><h2>등록</h2></button>
          </div>

        </div>
    );
  }
}

export default write;


