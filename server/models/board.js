module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'board',
      {
        board_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull : false,
       },

       patient_num : {
        type: DataTypes.STRING(50),
        allowNull : false
       },

       patient_name : {
        type: DataTypes.STRING(50),
        allowNull : false
       },

       med_name : {
        type: DataTypes.STRING(50),
        allowNull : false
       }, 

       med_time : {
        type: DataTypes.INTEGER,
        allowNull : false
       },

       date: {
        type: DataTypes.DATE,
        allowNull : false
       },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};