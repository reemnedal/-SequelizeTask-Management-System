  const {sequelize,DataTypes} = require('sequelize');

  module.exports=function(sequelize){


      const User =sequelize.define('user',{

username:{




        type:DataTypes.STRING,
        allowNull:false,
        unique:true,


  },


  email:{


        type:DataTypes.STRING,
        allowNull:false,
        unique:true,

    
      },
      

password:{


    type:DataTypes.STRING,
    allowNull:false,
    unique:true,


    },
       


 });
return User;

    
  }





