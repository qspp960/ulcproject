import React, { Component } from 'react';
import '../main.css';
import axios from 'axios';

class right_write extends Component {
  constructor(props) {
    super(props)
    this.state ={
        patient_num : "",
        patient_name : "",
        med_name : "",
        med_time: "",
    }
  }

  _submitBoard = async function() {
      const patient_num = document.getElementsByName('patient_num')[0].value.trim();
      const patient_name = document.getElementsByName('patient_name')[0].value.trim();
      const med_name = document.getElementsByName('med_name')[0].value.trim();
      const med_time = document.getElementsByName('med_time')[0].value.trim();
      if(patient_num === "" ){
          return alert('환자 번호를 입력하시오.');
      }else if(patient_name === ""){
          return alert('환자 이름을 입력하시오.');
      }else if(med_name === ""){
          return alert('복용 약 이름을 입력하시오.');
      }else if(med_time === ""){
        return alert('약 복용 주기를 입력하시오.');
    }
    const data = { patient_num : patient_num, patient_name : patient_name, med_name : med_name, med_time : med_time};
    const res = await axios ('/add/board',{
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
        <div>
          
        </div>
    );
  }
}

export default right_write;


