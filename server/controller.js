const path = require('path');
const Sequelize = require('sequelize');
const model = require('./model');
const hashing = require(path.join(__dirname, 'config', 'hashing.js'));
const salt  = require(path.join(__dirname, 'config', 'db.json'))
 .salt
 const moment = require('moment');
 require('moment-timezone');
 moment.tz.setDefault("Asia/Seoul");
 const user_ip = require("ip"); //사용자 아이피 가져오기
 const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
module.exports = {
    needs: () => upload,
    api : {
      //로그인 (아이디비밀번호 맞는지 확인) model에 요청
        sendPw : (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt)
            model.api.searchInfo(body, hash, result =>{
                var obj = {};
                if(result[0]) {//반환값 있으면 로그인 성공
                    obj['suc'] = result[0].dataValues;
                    obj['id'] = result[0].id;
                    obj['ip'] = user_ip.address();
                  } else { //반환값 없으면 로그인 실패
                    obj['suc'] = false;
                    obj['id'] = '로그인 실패';
                  }
                  
                  res.send(obj);
            })
            console.log('1. salt 값 : ' , salt);
            console.log('2. hash 결과 : ', hash);
          },
    },

    add : {
      
      //회원가입 입력값 추가 model에 요청
      homepageusers : (req, res) => {
        const body = req.body;
        const hash_pw = hashing.enc(body.id, body.password, salt);
        model.add.homepageusers(body, hash_pw, now_date, result =>{
          res.send(result);
        })
      },
      board : (req, res) =>{ 
              const body = req.body; 
               model.add.board(body, result =>{ 
                if(result){ 
                    res.send(true); 
                  } 
               }) 
             }, 
        
      


    },
    get : { 
      board_data : (req, res) => { 
                const body = req.body; 
    
         
           model.get.board_data(body, data => { 
                const result = { data : data } 
                res.send(result) 
              }) 
             }, 
        
      board : (req, res) => { 
              const body = req.body; 
              model.get.board(body, result => { 
                if(result) { 
                     res.send(result); 
                  } 
                 }) 
             }, 
              
      board_cnt : (req, res) => { 
          const body = req.body; 
          model.get.board_cnt(body, cnt => { 
            const result = { cnt : cnt } 
         res.send(result) 
         }) 
        },      
  
        
    }

}

