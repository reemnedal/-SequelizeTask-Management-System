// const {sequelize,DataTypes} = require('sequelize');

// module.exports=function(sequelize){

// const Task =sequelize.define('task',{

// Title:{


//       type:DataTypes.STRING,
//       allowNull:false,
   


// },


// descriptions:{


//       type:DataTypes.STRING,
//       allowNull:false,
    
  
//     },
    

// deleted:{


//   type:DataTypes.INTEGER,
  
  


//   },
     





// });
// return Task;

  
// }




 

const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0, // Default value of 0 indicates not deleted
    },
  }, {
    tableName: 'tasks', // Optional: specify the table name
    timestamps: true,   // Optional: automatically add `createdAt` and `updatedAt` fields
  });

  return Task;
};
