const Router = require("express");
const infoRoutes = require("./info-routes.js");
const router = Router();

router.use("/info", infoRoutes);

module.exports = router;
