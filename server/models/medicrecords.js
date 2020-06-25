module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'MedicRecords',
      {
        Record_id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull : false,
       },

       PatientName : {
        type: DataTypes.STRING(50),
        allowNull : false
       },

       Patient_Id : {
        type: DataTypes.STRING(50),
        allowNull : false
       },

       MedicName : {
        type: DataTypes.STRING(50),
        allowNull : false
       },

       TakingTime: {
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
