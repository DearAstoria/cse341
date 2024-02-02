const express = require("express");

const contactsController = require("../controllars/contacts");

const router = express.Router();

// GET /feed/posts
//router.get("/", contactsController.getContacts);
// GET 2nd request for specific id
//_id = "65bbf1b4dd27051a5e1ef44f";
router.get("/", contactsController.getSpecificContact);

// localhost:8080/contacts/
module.exports = router;
