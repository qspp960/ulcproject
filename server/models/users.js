module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'users',
      {
        UserId: {
         type: DataTypes.STRING(30),
         primaryKey: true,
       },
       UserPwd: {
        type: DataTypes.STRING(30),
        allowNull : true,
      },
      UserName: {
        type: DataTypes.STRING(30),
        allowNull : true,
      },
      patient_id: {
        type: DataTypes.INTEGER,
        allowNull : true,
      },
      UserEmail : {
        type: DataTypes.STRING(30),
        allowNull : true,
      },
       
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};


