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
 const nodeMailer = require('nodemailer');
 const mailPoster = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'qspp1250@gmail.com',
    pass: 'qs!!123123'
  }
});
const mailOpt = (user_data,title, contents) => {
  const mailOptions = {
    from: 'qspp1250@gmail.com',
    to: user_data.email ,
    subject: title,
    text: contents
  };

  return mailOptions;
};

// 메일 전송
const sendMail = (mailOption) => {
  mailPoster.sendMail(mailOption, function(error, info){
    if (error) {
      console.log('에러 ' + error);
    }
    else {
      console.log('전송 완료 ' + info.response);
    }
  });
}
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

    search : {
      id : (req,res) => {
        const body = req.body;
        model.search.id(body,result => {
          res.send(result)
        })
      },
      pw : (req,res) => {
        const body = req.body;
        model.search.pw(body, result => {
          var res_data = {};

          if(result[0]) {
            // 조회되는 데이터가 있는 경우 (메일 전송)
            const title = "비밀번호 조회 인증에 대한 6자리 숫자입니다.";
            const contents = () => {
              let number = "";
              let random = 0;

              for(let i = 0; i < 6; i++){
                random = Math.trunc(Math.random() * (9 - 0) + 0);
                number += random;
              }
              res_data['secret'] = number;
              return "인증 칸에 아래의 숫자를 입력해주세요. \n" + number;
            }
            const mailOption = mailOpt(result[0].dataValues,title,contents());
            sendMail(mailOption);
            res_data['result'] = result;
            res.send(res_data);
          }else{
            res.send(false)
          }
        })
      }
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

      reply : (req, res) => {
              const body = req.body;
      
              model.add.reply(body, now_date, result => {
                res.send(result)
              })
            }
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
  
        
    },
    update : {
      password : (req, res) => {
        const body = req.body;
        const hash_pw = hashing.enc(body.user_id, body.change_password, salt);

        model.update.password(body, hash_pw, result => {
          res.send(true)
        })
      }
    }

}

