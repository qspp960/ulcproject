const path = require('path');
const Sequelize = require('sequelize');
const model = require('./model');
const salt  = require(path.join(__dirname, 'config', 'db.json'))
 .salt
module.exports = {
    needs: () => upload,
    api : {
        sendPw : (req, res) => {
            console.log(req.body);
        }
    }
}