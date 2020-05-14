const sequelize = require('./models').sequelize;

const {
    Admin,
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
    }
}
