const sequelize = require('./models').sequelize;
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
const {
    Admin,
    Board,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8');

module.exports = {
    api : {
        searchInfo : (body, hash, callback) => {
            Admin.findAll({
                where : { [Op.and]: [{ user_id : body.id, password : hash }] }
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
