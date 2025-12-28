const Router = require("express");
const router = Router();
const { InfoController } = require("../../controllers");

router.use("/", InfoController.getInfoV2);

module.exports = router;
