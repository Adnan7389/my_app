const { Router } = require("express");
const controller = require("../controllers/userController");

const router = Router();

router.get("/", controller.getUsernames);
router.get("/new", controller.createUsernameGet);
router.post("/new", controller.createUsernamePost);
router.get("/delete", controller.deleteUsernames);

module.exports = router;
