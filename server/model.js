const sequelize = require('./models').sequelize;
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
const {
    Homepageusers,
    Reply,
    Boards,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8');

module.exports = {
    api : {
        //홈페이지 users 아이디와 비밀번호에 맞는 튜플 있는지
        searchInfo : (body, hash, callback) => {
            Homepageusers.findAll({
                where : { [Op.and]: [{ id : body.id, password : hash }] }
            })
            .then(data => {
                callback(data)
            })
            .catch(err =>{
                throw err;
            })
        },
        
    },

    search : {
        id : (body,callback) => {
            Homepageusers.findAll({
                where: {
                    name : body.user_name,
                    birthday : body.user_birthday,
                    sex : body.user_sex,
                    email : body.user_email
                }
            })
            .then(result => { callback(result)})
            .catch(err => { throw err;})
        },
        pw : (body, callback) => {
            Homepageusers.findAll({
                where : {
                    id : body.user_id,
                    email : body.user_email
                }
            })
            .then(result => { callback(result)})
            .catch(err => { throw err; })
        }
    },

    add : {
        board : (body, callback) =>{ 
                Boards.create({ 
                title: body.title, 
                writer : body.writer, 
                contents : body.contents, 
                writetime : now_date 
                        }) 
                         .then(data =>{ 
                            callback(true) 
                        }) 
                     .catch(err => { 
                           throw err; 
                     }) 
                  }, 

                  reply : (body, now_date, callback) => {
                    Reply.create({
                        contents : body.contents,
                        date : now_date,
                        board_id : body.board_id,
                        user_id : body.user_id
                    })
                    .then( () => callback(true) )
                    .catch( () => callback(false) )
                },
            
        
        // 사용자 추가
        homepageusers : (body, hash_pw, now, callback) => {
            Homepageusers.count({
                where : { id : body.id }
            })
            .then(cnt => {
                if(cnt > 0) {
                    callback(false);
                }else {
                    Homepageusers.create({
                             admin : 'N',
                             id : body.id,
                             password : hash_pw,
                             name : body.name,
                             birthday : body.birthday,
                             sex : body.sex,
                             email : body.email,
                             signup_date : now
                    })
                    .then( () => callback(true) );
                }
            })
        }
        
    },

    get : {
        board_data : (body, callback) => { 
            
                      Boards.findAll({ 
                          
                            where : { board_id : body.id } 
                      }) 
                    .then(result => { 
                            callback(result);   
                        }) 
                    .catch(err => { 
                           throw err; 
                       }) 
        },
        board_cnt : (body, callback) => { 
                         let search = "%%"; 
             
             
                         if(body.search) { 
                             search = '%' + body.search + '%'; 
                         } 
                  
                         Boards.count({ 
                             where : { 
                                 title : { 
                                     [Op.like] : search 
                                 } 
                             } 
                         }) 
                         .then(result => { 
                           callback(result); 
                         }) 
                       }, 
            
        board : (body, callback) => { 
                         let search = "%%"; 
             
             
                         if(body.search) {//만약 search값있으면 search값만 찾기 
                             search = '%' + body.search + '%';  
                         } 
                          
                         Boards.findAll({ 
                             where : { 
                                 title : { 
                                     [Op.like] : search 
                                 } 
                             }, 
                                 limit : (body.page * body.limit), 
                                 offset : (body.page - 1) * body.limit, 
                                 order: sequelize.literal('board_id DESC') 
                             }) 
                         .then(result => { 
                             callback(result) 
                         }) 
                         .catch(err => { 
                             throw err; 
                         }) 
                     }, 
            
    },
    update : {
        password : (body, hash_pw, callback) => {
            Homepageusers.update({ password : hash_pw }, {
                where : { id : body.user_id }
            })
            .then( () => { callback(true) })
            .catch(err => { throw err; })
        }
    }

}
