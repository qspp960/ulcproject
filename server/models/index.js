'use strict'

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.json'))[
    env
  ];
const db = {};
let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    }
  );
  
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    db.sequelize
    .authenticate()
    .then(() => {
        console.log('DATABASE CONNECTION SUCCESS!!!!!');
    })
    .catch(err => {
        console.log('UNABLE TO CONNECT DB!! -> ', err);
    });
    db.Admin = require('./Admin')(sequelize,Sequelize);
    db.Timesetting = require('./TimeSetting')(sequelize,Sequelize);
    db.Homepageusers = require('./Homepageusers')(sequelize, Sequelize);
    db.Alltimelist = require('./Alltimelist')(sequelize, Sequelize);
    db.Boards = require('./Board')(sequelize, Sequelize);
    db.Users = require('./Users')(sequelize, Sequelize);
    db.MedicRecords = require('./MedicRecords')(sequelize, Sequelize);
    db.secret = '(9*)5$&dfds!3%^0%^@@2$1!#5@2sdf!4';
module.exports = db;
