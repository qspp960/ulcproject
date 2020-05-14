import React, { Component } from 'react';
import './main.css';
class write extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div className="Write">
            
          <div>
            환자 번호
            <input type='text' id='patient_num'/>
          </div>

          <div>
              환자 이름
              <input type='text' id='patient_name'/>
          </div>

          <div>
              복용 약 이름
              <input type='text' id='med_name'/>
          </div>

          <div>
              복용 약 주기
              <input type='text' id='med_time'/>
          </div>

        </div>
    );
  }
}

export default write;


