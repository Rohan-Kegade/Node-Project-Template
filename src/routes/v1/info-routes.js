const Router = require("express");
const router = Router();
const { InfoController } = require("../../controllers");

router.get("/", InfoController.getInfo);

module.exports = router;
