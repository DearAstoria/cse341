const express = require("express");

const professionalController = require("../controllars/professional");

const router = express.Router();

// GET /feed/posts
router.get("/", professionalController.getData);
router.get("/", professionalController.getContacts);
// localhost:8080/professional/
module.exports = router;
