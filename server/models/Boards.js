module.exports = (sequelize, DataTypes) => { 
         return sequelize.define( 
           'boards', 
           { 
             board_id: { 
              type: DataTypes.INTEGER, 
              primaryKey: true, 
              autoIncrement: true, 
              allowNull : false, 
            }, 
     
     
            title : { 
             type: DataTypes.STRING(50), 
             allowNull : false 
            }, 
     
     
            contents: { 
             type: DataTypes.TEXT, 
             allowNull : false 
            }, 
     
     
            writer : { 
             type: DataTypes.STRING(50), 
             allowNull : false 
            }, 
     
     
           writetime: { 
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
    