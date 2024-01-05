const router = require("express").Router();
const cocController = require("./coc.controller");

router.route("/").post(cocController.uploadRecords);

module.exports = router;
