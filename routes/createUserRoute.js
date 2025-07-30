const { Router } = require('express');
const { createUser, getPage } = require('../controllers/createUserController');


const createUserRouter = Router();


createUserRouter.get('/', getPage)
createUserRouter.post('/', createUser);


module.exports = {
    createUserRouter
};