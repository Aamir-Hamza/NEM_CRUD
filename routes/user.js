const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.post("/register", userController.register);
router.get("/fetch", userController.fetchdata);
router.delete('/:id',userController. deleteUser);

module.exports = router;