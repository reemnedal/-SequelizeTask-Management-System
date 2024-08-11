const sequelize=require('sequelize');
const dbb=new sequelize('task','postgres','0000',{

host:'localhost',
dialect:'postgres'



});


module.exports=dbb;
