var userService = require('../services/userServices')
const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');
const saltRounds = 8;

var controller = {

  login(req,response) {
    console.log(req.body);

    let user = ""

    userService.checkForExistingUser(req.body.email).then(res=>{
      console.log(" * * "+res);
      user = res

      if(user) {

        let result = bcrypt.compareSync(req.body.password, res.password);

        response.status(200).send({msg:{
          result: result,
          name: user.name,
          email: user.email
        }});

      } else {
        response.send({msg:
          {
            exists: false
          }
        });
      }
    })
  },

  post(req,response) {
    console.log(req.body);

    let user = ""

    userService.checkForExistingUser(req.body.email).then(res=>{
      user = res

      if(user) {
        response.status(200).send({msg:
          {
            exists: true
          }
        });
      } else {
        let result = userService.registerUser(req.body, uuid, bcrypt, saltRounds)
        result.then(res=>{
          console.log("res "+res);
          response.status(200).send({msg:res});
        },err=>{
          console.log("err "+err);
          response.send({msg:err});
        })
      }
    })
  },

  get(req,res) {

  },

  delete(req,res) {

  }

}

module.exports = controller
