const { Router } = require("express");
const { deleteEveryUser } = require("../controllers/deleteEveryUserController");




const router = Router();
router.get("/", deleteEveryUser);


module.exports = {
    deleteEveryUserRouter: router
}