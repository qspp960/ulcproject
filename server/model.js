const sequelize = require('./models').sequelize;
var moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

const now_date = moment().format('YYYY-MM-DD HH:mm:ss');
const {
    Alltimelist,
    Timesetting,
    Homepageusers,
    Boards,
    Users,
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
    get : {
        users_cnt : (body, callback) => {
            let search = "%%";

            if(body.search) {
                search = '%' + body.search + '%';
            }
    
            Users.count({
                where : { 
                    UserName : {
                        [Op.like] : search
                    },    
                    
                }
            })
            .then(result => {
              callback(result);
              console.log("users 카운트"+ result);
            })
          },
          users : (body, callback) => {
            let search = "%%";

            if(body.search) {
                search = '%' + body.search + '%';
            }
            
            Users.findAll({
                where : {
                    UserName : {
                        [Op.like] : search
                    },
                },
                    limit : (body.page * body.limit),
                    offset : (body.page - 1) * body.limit,
                    order: sequelize.literal('patient_id ASC')
                })
            .then(data => {
                callback(data)
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
                    patientname : {
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

            if(body.search) {
                search = '%' + body.search + '%';
            }
            
            Boards.findAll({
                where : {
                    patientname : {
                        [Op.like] : search
                    }
                },
                    limit : (body.page * body.limit),
                    offset : (body.page - 1) * body.limit,
                    order: sequelize.literal('board_id DESC')
                })
            .then(data => {
                callback(data)
            })
            .catch(err => {
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
            Boards.create({
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
