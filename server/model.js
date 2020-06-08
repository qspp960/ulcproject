const sequelize = require('./models').sequelize;
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
const {
    Admin,
    Board,
    User,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8');

module.exports = {
    api : {
        searchInfo : (body, hash, callback) => {
            User.findAll({
                where : { [Op.and]: [{ id : body.id, password : hash }] }
            })
            .then(data => {
                callback(data)
            })
            .catch(err =>{
                throw err;
            })
        }
    },
    add : {
        user : (body, hash_pw, now, callback) => {
            User.count({
                where : { id : body.id }
            })
            .then(cnt => {
                if(cnt > 0) {
                    callback(false);
                }else {
                    User.create({
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
        },
        board : (body, callback) => {

            Board.create({
                patient_num : body.patient_num,
                patient_name : body.patient_name,
                med_name : body.med_name,
                med_time : body.med_time,
                date : now_date
            })
            .then(data => {
                callback(true)
            })
            .catch(err => {
                throw err;
            })
        }
    }

}
