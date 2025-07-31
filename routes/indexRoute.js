const { Router } = require('express');
const { indexGetPage } = require("../controllers/indexController");


const indexRouter = Router();

indexRouter.get("/",indexGetPage);





module.exports = {
    indexRouter
};