const router = require("express").Router();

router.use("/api", require("./workoutRoutes"));
router.use(require('./viewRoutes'))

module.exports = router;
