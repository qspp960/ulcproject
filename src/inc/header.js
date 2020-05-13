import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../App.css';
import Modal from 'react-awesome-modal';
import axios from 'axios';

class header extends Component {
  constructor(props){
      super(props)
      this.state = {
          visible : true,
          id : "",
          password : ""
      }
  }
  _selectUserData = async (e) => {
    const res = await axios('/send/pw', {
      method : 'POST',
      data : this.state,
      headers: new Headers()
      })

      if(res.data) {
        console.log(res.data)
      }else{
        console.log(`err!!!!!!!!!!!`)
      }
   }

  _openModal = function() {
    this.setState({
        visible : true
    });
  }

  _closeModal = function() {
    this.setState({
        visible : false
    });
  }
  _changeID = function() {
    const id_v = document.getElementsByName('id')[0].value;

    this.setState({
        id : id_v
    });
  }
  _changePW = function() {
    const pw_v = document.getElementsByName('password')[0].value;

    this.setState({
        password : pw_v
    });
  }


  render() {
    console.log('아이디: ' + this.state.id + ' 비밀번호: '+this.state.password);
    return (
        <div class='header_grid'>
            <div> </div>
            <div className='acenter'>
                <Route path='/'/>
                <Link className='link_tit' to='/'> <h3> ID's 구급상자 로봇 </h3> </Link>
            </div>

            <div className='acenter'> 
            <h5 onClick={() => this._openModal()}> LOGIN </h5>
            <Modal visible={this.state.visible} 
                       width="400" height="360"
                       effect="fadeInDown" 
                       onClickAway={() => this._closeModal()}
                >
                  <div>
                    <h4 className='acenter login_tit'> LOGIN </h4>
                    <form>
                    <div className='login_div'>
                      <div className='login_input_div'>
                        <p> ID </p>
                        <input type='text' name='id' onChange={() => this._changeID()}/>
                      </div>

                      <div className='login_input_div' style={{ 'marginTop' : '40px'}}>
                        <p> Password </p>
                        <input type='text' name='password' onChange={()=>this._changePW()}/>
                      </div>

                      <div className='submit_div'>
                        <div> <input type='button' value='로그인' onClick={() => this._selectUserData()}/> </div>
                        <div> <input type='button' value='취소' onClick={() => this._closeModal()}/> </div>
                      </div>
                    </div>
                    </form>
                  </div>
                </Modal>
            </div>
        </div>
    );
  }
}

export default header;


