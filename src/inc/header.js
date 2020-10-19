import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import '../App.css';
import logo from '../image/logo.PNG';
import logo1 from '../image/logo1.PNG';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import '../page/main.css';
import { Navbar, Nav, Form, FormControl, Button, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './index.js'

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible : true,
        id : "",
        password : "",
        login : false
    }
}
componentDidMount() {
  if(sessionStorage.login) {
    this.setState({ login : true })
  }
}
_openModal = function() {
  return this.props._toggleModal(true)
}
 _logout = function() {
  if(window.confirm('로그아웃 하시겠습니까?')) {
    this.props._logout();
    sessionStorage.removeItem('login')
    this.setState({ login : false })
    return window.location.href = '/';
  }
}




  
  render() {
    const { login, admin, user_ip, login_modal, _toggleModal} = this.props;
    console.log('아이디: ' + this.state.id + ' 비밀번호: '+this.state.password);

    return (
        
        <div className="Navigation">
      
            <Navbar bg="secondary" variant="light">
            <Navbar.Brand href='/'><img width="80" height="40" src={logo}></img></Navbar.Brand>
            <Nav className="mr-auto">
            <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-button-drop-down">
            CLASS
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {this.state.login ?
              <Dropdown.Item >온라인 수업</Dropdown.Item>:
              <Dropdown.Item> 온라인 수업</Dropdown.Item>}
              {this.state.login ?
              <Dropdown.Item> 성적 확인 </Dropdown.Item>:
              <Dropdown.Item> 성적 확인</Dropdown.Item>}
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            COMMUNITY
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>팀원 찾기</Dropdown.Item>
              {this.state.login ? 
                 <Dropdown.Item href="/board">자유게시판</Dropdown.Item> 
                : <Dropdown.Item>자유게시판</Dropdown.Item>} 
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            MY PAGE
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {this.state.login ?
                  <Dropdown.Item>마이페이지</Dropdown.Item>
                : <Dropdown.Item>마이페이지</Dropdown.Item>}
            {this.state.login ?
                  <Dropdown.Item>관리자 문의</Dropdown.Item>
                : <Dropdown.Item>관리자 문의</Dropdown.Item>}
            </Dropdown.Menu>
            </Dropdown>
                    
                </Nav>
                <div className='acenter_login'> 
                  {this.state.login ? <Button variant="secondary" href='/'><h6 onClick={() => this._logout()}>LOGOUT</h6></Button>
                  : <div className='menu'>
                      <li><h6 className='btn_cursor'onClick={() => this._openModal()}><Button variant="secondary" >LOGIN</Button></h6></li>
                      <li><h6> <Button variant="secondary" href='/signup'>SIGNUP</Button></h6></li>
                    </div>
            }
            <Login 
              login_modal = {login_modal}
              _toggleModal = {_toggleModal}
              _login = {this.props._login}
            />
            </div>
            </Navbar>
     
        </div>
    );
  }
}

export default header;


