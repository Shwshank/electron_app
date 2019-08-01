var db = require('../db');
var user = require('../model/userModel');

User = {

  registerUser: async function(data, uuid, bcrypt, saltRounds) {
    try{

       await new user({
        email: data.email,
        name: data.name,
        password: bcrypt.hashSync(data.password, saltRounds),
        id: uuid()
      }).save().then(res=>{
        resp = res
      }, err=>{
        console.log(err);
        resp = err
      })
      return resp
    } catch(err) {
      console.log(err);
      return err+""
    }
  },

  checkForExistingUser: async function(data) {
    try{

      let userExists
      await user.findOne({email: data}).then(res=>{
        if(res){
          userExists = res;
        }
      }, err=>{
        console.log(err);
      })
      return userExists
    } catch(err) {
      console.log(err);
    }
  },

  getAllUsers: function(data, callback) {
    try{

    } catch(err) {
      console.log(err);
    }
  },

  deleteUser: function(data, callback) {
    try{

    } catch(err) {
      console.log(err);
    }
  },

  loginUser: function(data, callback) {
    try{

    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = User;
