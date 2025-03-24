const {messages, getMessageByIdF, users}  = require('../db');
const asyncHandler = require('express-async-handler');


//Validator
const { body, validatorResult, validationResult } = require('express-validator');

const alphaErr = 'Must only containt letter';
const lengthErr = 'Max 10 characters';

const validateUser = [
    body('firstName').trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10}).withMessage(`First name ${lengthErr}`),
    body('lastName').trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10}).withMessage(`Last name ${lengthErr}`),
    body('email').trim()
    .isEmail().withMessage('Email must be this format : example@email.com'),
    body('age').trim()
    .isInt({gt: 17, lt: 121}).withMessage('Age between 18 and 120'),
    body('bio').trim()
    .isLength({max:200})
]
const validateId = [
  body('id').trim()
  .isNumeric().withMessage('ID is a Number.'),
]



//functions

//create User
exports.userCreatePost = [
    validateUser,
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("createUser", {
          errors: errors.array(),
        });
      }
      const { firstName, lastName, email, age, bio } = req.body;
      users.addUser({ firstName, lastName, email, age, bio });
      res.redirect("/users");
    }
  ];







//Search User
exports.searchUserIdGet = [
  (req, res) => {
    res.render('userSearch');
  }
]





exports.searchUserIdPost = [
  validateId,
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).render('userFound', {errors: errors.array()
      });
    }
    const id = req.body;
    const user = await users.getUsersById(id);
    res.render('userFound', {user: user});
  }
]





