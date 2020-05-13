const path = require('path');
const model = require('./model');

module.exports = {
    needs: () =>upload,
    api : {
        sendPw : (req, res) => {
            console.log(req.body);
        }
    }
}