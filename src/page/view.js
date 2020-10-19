import React, { Component } from 'react'; 
 import './main.css'; 
 import axios from 'axios'; 
 import { Link } from 'react-router-dom'
 
 class view extends Component { 
   constructor(props) { 
     super(props) 
     this.state={ 
       data : []
     } 
   } 
   componentDidMount() { 
     this._getData() 
   } 
   
   _loginCheck = () => {
    const { 
      login, _toggleModal
    } = this.props;

    if(!login) {
      alert('로그인이 필요합니다.');
      return false;
    }
    return true;
  }
  _addReply = async () => {
    let reply = document.getElementsByName('write_reply')[0].value.trim();

    // 내용 줄바꿈 처리하기
    reply = reply.replace(/(\n|\r\n)/g, '<br>');

    const board_id = this.props.match.params.data;
    const { user_id } = this.props;

    if(!this._loginCheck()) {
      return
    }

    if(reply === "" || reply.length === 0) {
      document.getElementsByName('write_reply')[0].focus()
      document.getElementsByName('write_reply')[0].value = reply;

      return alert('댓글을 입력해주세요.');

    } else if(reply.split('<br>').length > 5) {
      return alert('댓글 내용이 5줄 이상 초과되었습니다.')
    }
    const data = { 
      board_id : board_id,
      contents : reply,
      user_id : user_id 
    }

    await axios('/add/reply', {
      method : 'POST',
      headers: new Headers(),
      data : data
    })

    alert('댓글이 등록되었습니다.')
    return window.location.reload();
  }
   
   
   _getData = async function() { 
     const board_id = this.props.match.params.data; 
 
 
     const getData = await axios('/get/board_data', { 
       method : 'POST', 
       headers: new Headers(), 
      data : { id : board_id } 
     }); 
     return this.setState({data : getData, board_id : board_id});
    }

 
  render() { 
 
  
 
     const { data } = this.state; 
    const {_loginCheck, _addReply} = this;
   
 
     return (
       <div> 
       <div className='Write'> 
       {data.data  
       ? <div> 
 
 
           <div className='top_title'> 
             <input type='text' id='title_txt' name='title' defaultValue={data.data.data[0].title} readOnly/> 
 
 
              
          </div> 
            
           <div> 
             <textarea id='content_txt1' name='contents' defaultValue={data.data.data[0].contents} readOnly></textarea> 
           </div> 
         </div> 
       : null} 
     </div> 

     <div className='Reply_div'>
        <h4> 댓글 </h4>
        <div className='Reply_write'>
          <textarea rows='3' placeholder='댓글을 입력해주세요.'
            onClick={() => _loginCheck()}
            maxlength='100' name='write_reply'>

            </textarea>
            <input type='button' value='등록' id='reply_submit_button'
              onClick={() => _addReply()}
            />
        </div>

     </div>

     </div>
     ); 
   } 
 } 
 
 
 export default view; 
