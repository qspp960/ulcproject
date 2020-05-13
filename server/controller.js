const path = require('path');
const model = require('./model');

module.exports = {
    needs: () =>upload,
    api : {
        getData : (req, res) => {
            model.api.getData( data => {
                return res.send( data )
            })

        },
        addData : (req, res) => {

        },
    }
}