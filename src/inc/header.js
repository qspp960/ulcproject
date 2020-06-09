import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../App.css';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import imgtitle from '../image/title.PNG';
import '../page/main.css';

class header extends Component {
  constructor(props){
      super(props)
      this.state = {
          visible : false,
          id : "",
          password : "",
          login : false,
      }
  }
  componentDidMount() {
    if(sessionStorage.login) {
      this.setState({ login : true })
    }
  }
  _selectUserData = async (e) => { const id = this.state.id.trim();
    const password = this.state.password.trim();
    if(id === "") {
      return alert('아이디를 입력해주세요.');

    } else if(password === "") {
      return alert('비밀번호를 입력해주세요.');
    }
    const obj = { id : id, password : password }
    const res = await axios('/send/pw', {
      method : 'POST',
      data : obj,
      headers: new Headers()
      })
      if(res.data) {
        console.log(res.data.msg);
      }
      if(res.data.suc){
        sessionStorage.setItem('login',true);
        this.setState({login:true});
        this._closeModal();
        return alert('로그인 완료');
      }else{
        return alert('아이디 및 비밀번호가 일치하지 않습니다');
      }
   }

  _openModal = function() {
    this.setState({
        visible : true
    });
  }

  _closeModal = function() {
      this.setState({visible : false});
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
  _logout = function() {
    if(window.confirm('로그아웃 하시겠습니까?')) {
      sessionStorage.removeItem('login')
      this.setState({ login : false })
    }
  }


  render() {
    console.log('아이디: ' + this.state.id + ' 비밀번호: '+this.state.password);
    return (
      <div>
        <div class='header_grid'>
        <div>
          </div>
          <div className='acentertitle'>
            <Route path='/'/> 
            <Link className='link_tit' to='/'><img src={imgtitle} /></Link>
          </div>
            <div className='acenter_login'> 
            {this.state.login ? <Link className='link_tit' to='/'><h3 className='btn_cursor' onClick={() => this._logout()}> 로그아웃 </h3></Link>
                  : <div className='menu'>
                      <li><h3 className='btn_cursor' onClick={() => this._openModal()}>로그인</h3></li>
                      <li><h3> <Link className='link_tit' to='/signup'> 회원가입</Link></h3></li>
                    </div>
            }
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
                        <input type='password' name='password' onChange={()=>this._changePW()}/>
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
            <div className='Mainmenubar'>
                <div id='Mainmenubar-first'>
                    <h2>환자 정보 확인</h2>
                </div>
                <div id='Mainmenubar-second'>
                {this.state.login ?
                  <Link className='link_tit' to='/write'><h2>데이터 입력</h2></Link>
                : <h2>데이터 입력</h2>}
                </div>
                <div id='Mainmenubar-third'> 
                {this.state.login ?
                  <Link className='link_tit' to='/board'><h2>게시판</h2></Link>
                : <h2>게시판</h2>}
                </div>
                <div id='Mainmenubar-fourth'>
                      <h2>이전 데이터 확인</h2>
                </div>
            </div>
        </div>
    );
  }
}

export default header;


