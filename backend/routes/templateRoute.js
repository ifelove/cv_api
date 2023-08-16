const express = require("express");
const router = express.Router();

const {
  getAllTemplate,
  getSingleTemplate,
  deleteTemplate,
  createTempelate,
  updateTemplate,
} = require("../controller/templateController");

router.route("/").get(getAllTemplate).post(createTempelate);
router
  .route("/:id")
  .get(getSingleTemplate)
  .patch(updateTemplate)
  .delete(deleteTemplate);

module.exports = router;
