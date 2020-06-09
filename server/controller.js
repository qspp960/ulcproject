const path = require('path');
const Sequelize = require('sequelize');
const model = require('./model');
const hashing = require(path.join(__dirname, 'config', 'hashing.js'));
const salt  = require(path.join(__dirname, 'config', 'db.json'))
 .salt
 const moment = require('moment');
 require('moment-timezone');
 moment.tz.setDefault("Asia/Seoul");
 
 const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
module.exports = {
    needs: () => upload,
    api : {
        sendPw : (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.id, body.password, salt)
            model.api.searchInfo(body, hash, result =>{
                var obj = {};
                if(result[0]) {
                    obj['suc'] = true;
                    obj['msg'] = '로그인 성공';
    
                  } else {
                    obj['suc'] = false;
                    obj['msg'] = '로그인 실패';
                  }
                  
                  res.send(obj);
            })
            console.log('1. salt 값 : ' , salt);
            console.log('2. hash 결과 : ', hash);
          },
    },
    add : {
      board : (req, res) =>{
        const body = req.body;
        model.add.board(body, result =>{
          if(result){
            res.send(true);
          }
        })
      },
      homepageusers : (req, res) => {
        const body = req.body;
        const hash_pw = hashing.enc(body.id, body.password, salt);
        model.add.homepageusers(body, hash_pw, now_date, result =>{
          res.send(result);
        })
      },
      timesetting : (req, res) => {
        const body = req.body;
        model.api.searchOverlap(body, result =>{
          if(result[0]){
            model.delete.delOverlap(body, result=>{
              model.add.timesetting(body, result => {
                if(result) {
                  res.send(true);
                }
            })
            })
          }
          else{
          model.add.timesetting(body, result => {
              if(result) {
                res.send(true);
              }
          })

        }

        })

        
      },
    },

}

