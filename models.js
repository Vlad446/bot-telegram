const sequelize = require('./db');
const {DataTypes}= require('sequelize');

const User = sequelize.define('user',{
    id:{type: DataTypes.INT, primaryKey:true, unique:true, autoIncrement: true},
    chatId: {type: DataTypes.String, unique: true},
    right: {type:DataTypes.INT, defaultValue:0},
    wrong: {type:DataTypes.INT, defaultValue:0},
})

module.exports=User;