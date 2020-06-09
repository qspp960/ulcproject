const sequelize = require('./models').sequelize;
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
const {
    Alltimelist,
    Timesetting,
    Homepageusers,
    Board,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8');

module.exports = {
    api : {
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
        searchOverlap : (body, callback) =>{
            Timesetting.findAll({
                where : { [Op.and]: [{patient_id: body.patient_id, patientname: body.patientname, medName: body.medName }]}
            })
            .then(data => {
                callback(data)
            })
            .catch(err =>{
                throw err;
            })
        }

    },
    delete : {
        delOverlap : (body, callback) =>{
            Timesetting.destroy({
                where :{ [Op.and]: [{patient_id: body.patient_id, patientname: body.patientname, medName: body.medName }]}
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
        board : (body, callback) =>{
            Board.create({
                patient_id: body.patient_id,
                patientname : body.patientname,
                contents : body.contents,
                date : now_date
            })
            .then(data =>{
                callback(true)
            })
            .catch(err => {
                throw err;
            })
        },
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
        },
        timesetting : (body, callback) => {

            Timesetting.create({
                patient_id : body.patient_id,
                patientname : body.patientname,
                medName: body.medName,
                medTime : body.medTime,
                date : now_date
            })
            .then(data => {
                callback(true)
            })
            .catch(err => {
                throw err;
            })

            Alltimelist.create({
                patient_id : body.patient_id,
                patientname : body.patientname,
                medName: body.medName,
                medTime : body.medTime,
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
